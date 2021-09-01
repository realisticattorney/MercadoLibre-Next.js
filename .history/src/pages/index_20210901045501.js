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
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="https://og-image.vercel.app/.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fanymarket.com.ar%2Fwp-content%2Fuploads%2F2019%2F04%2F1200px-MercadoLibre-1.png&widths=undefined&widths=350&heights=200&heights=auto"
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
