import ProductFeed from '../../components/ProductFeed';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import fs from 'fs/promises';
import { useRouter } from 'next/router';
import path from 'path';

const CategoryId = ({ categoryId }) => {
  const router = useRouter();

  console.log(categoryId);

  return (
    <div className="bg-gray-200">
      {/* <Head>
        <title>Amazon 2.0</title>
      </Head> */}

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        <section className="px-1">
          {/* ProductFeed */}
          {/* <ProductFeed products={products} /> */}
        </section>
      </main>
    </div>
  );
};

export default CategoryId;

// export async function getServerSideProps(context) {
//   try {
//     const products = await fetch(`https://fakestoreapi.com/products`);
//     return {
//       props: {
//         products: await products.json(),
//       },
//     };
//   } catch (e) {
//     return {
//       error: e,
//     };
//   }
// }
export async function getStaticProps(context) {




  const { categoryId } = context.params;


  
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonProductsData = await fs.readFile(filePath);
  const productsData = JSON.parse(jsonProductsData);

  return {
    props: {
      categories: productsData.results,
      categoryId,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { categoryId: '1' } }],
    fallback: false,
  };
}
