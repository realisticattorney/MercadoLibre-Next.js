import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';

import { useRouter } from 'next/router';
import CategoryFeed from '../components/CategoryFeed';
//this can only be read by the server
import fs from 'fs/promises';
import path from 'path';
import { getSession } from 'next-auth/client';
import Footer from '../components/Footer';

export default function Home({ categories }) {
  const router = useRouter();

  return (
    <div className="bg-gray-200">
      <Head>
        <title>Next MercadoLibre</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          property="og:image"
          content="/images/"
        />
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

      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const session = await getSession(context);
  const filePath = path.join(process.cwd(), 'data', 'categories.json');
  const jsonCategoriesData = await fs.readFile(filePath);
  const categoriesData = JSON.parse(jsonCategoriesData);

  return {
    props: {
      categories: categoriesData.categories,
      session,
    },
  };
}
