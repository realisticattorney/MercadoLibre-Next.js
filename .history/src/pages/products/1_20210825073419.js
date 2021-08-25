import ProductFeed from '../../components/ProductFeed';
import Header from '../../components/Header';
import fs from 'fs/promises';
import { useRouter } from 'next/router';
import path from 'path';
import Image from 'next/image';

const Practice = ({ products }) => {
  const router = useRouter();

  console.log(products);

  const { results } = products;

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
      <div className="grid grid-flow-row-dense grid-cols-2 mx-auto">
        <div className="col-span-1 max-w-[400px]">
        <p className="py-5">
          Búsquedas relacionadascampana cocinatermo electricothermomixtermo
          electrico peabody
        </p>

   
            <h5>Descuentazos electronicaElectrodomésticos y Aires Ac.</h5>
            <p className="text-gray-700 font-light text-sm">5.340 Results</p>
            <h5 className="text-2xl">
              Descuentazos: Electrodomésticos y Aires Ac.
            </h5>
          </div>

          <div className="px-1 max-w-[400px]">
            {/* ProductFeed */}
            <ProductFeed products={results} />
          </div>
        </div>
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
