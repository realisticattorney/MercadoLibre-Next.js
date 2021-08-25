import ProductFeed from '../../components/ProductFeed';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import fs from 'fs/promises';
import { useRouter } from 'next/router';
import path from 'path';
import Image from 'next/image';

const Practice = ({ products }) => {
  const router = useRouter();

  console.log(products);

  const { results } = products;

  return (
    <div className="bg-gray-200">
      {/* <Head>
        <title>Amazon 2.0</title>
      </Head> */}

      <Header />
<div className="relative">
      <div className="w-full h-36  from-gray-100 bottom-0 z-20">
          {/* img loading lazy means that doesnt slows down the app*/}
          <Image
            loading="lazy"
            objectFit="cover"
            layout="fill"
            src="/images/slide-1.jpg"
            alt=""
          />
        </div>
        </div> 

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        {/* <Banner /> */}

        <section className="px-1">
          {/* ProductFeed */}
          <ProductFeed products={results} />
        </section>
      </main>
    </div>
  );
};

export default Practice;

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonProductsData = await fs.readFile(filePath);
  const productsData = JSON.parse(jsonProductsData);

  return {
    props: {
      products: productsData,
    },
  };
}
