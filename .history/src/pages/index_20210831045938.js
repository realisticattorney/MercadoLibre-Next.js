import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';

import { useRouter } from 'next/router';
import CategoryFeed from '../components/CategoryFeed';
//this can only be read by the server
import fs from 'fs/promises';
import path from 'path';
import { getSession } from 'next-auth/client';
var url = require('url');

export default function Home({ categories }) {
  const router = useRouter();

  
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Next MercadoLibre</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

   

        <section className="px-1">
          {/* Categories */}
          {<CategoryFeed categories={categories} />}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {


function fullUrl(req) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  });
}
  const session = await getSession(context)
  const filePath = path.join(process.cwd(), 'data', 'categories.json');
  const jsonCategoriesData = await fs.readFile(filePath);
  const categoriesData = JSON.parse(jsonCategoriesData);

  return {
    props: {
      categories: categoriesData.categories,
      session
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
