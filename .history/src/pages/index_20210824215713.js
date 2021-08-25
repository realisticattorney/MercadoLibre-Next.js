import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed';
import { useRouter } from 'next/router';
import CategoryFeed from '../components/CategoryFeed';
//this can only be read by the server
import fs from 'fs/promises';
import path from 'path';

export default function Home({ categories }) {
  const router = useRouter();

  // console.log(products)
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <button onClick={() => router.replace('/products/lala')}>
          HERE SIR
        </button>
        {/* <ProductFeed products={products} /> */}

        {/* Categories */}
        {<CategoryFeed categories={categories} />}
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), 'data', 'categories.json');
  const jsonCategoriesData = await fs.readFile(filePath);
  const categoriesData = JSON.parse(jsonCategoriesData);

  return {
    props: {
      categories: categoriesData.categories,
    },
  };
}

// To do any server-side
// GET >> https://fakestoreapi.com/products
// export async function getServerSideProps(context) {

//   try {
//   const products = await fetch(`https://fakestoreapi.com/products`)
//   return {
//     props: {
//       products: await products.json()
//     }
//   };
// } catch (e) {
//   return {
//     error: e
//   };
// }

// }
