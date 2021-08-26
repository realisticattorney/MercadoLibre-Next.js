import Header from '../../components/Header';
import fs from 'fs/promises';
import { useRouter } from 'next/router';
import path from 'path';

import ProductsFeedContainer from '../../components/ProductsFeedContainer';

const Practice = ({ products }) => {
  const router = useRouter();

  console.log(products);

  const { results, available_filters } = products;

  return (
    <div className=" bg-gray-200">
      {/* <Head>
        <title>Amazon 2.0</title>
      </Head> */}

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <div className="relative">
          <div className="w-full h-72">
            {/* img loading lazy means that doesnt slows down the app*/}
            <Image
              loading="lazy"
              objectFit="cover"
              layout="fill"
              src="/images/banner-1.png"
              alt=""
            />
          </div>
        </div>

         <ProductsFeedContainer products={products} />
       
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
