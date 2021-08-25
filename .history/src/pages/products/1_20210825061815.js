import ProductFeed from '../../components/ProductFeed';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
// import fs from 'fs/promises';
import { useRouter } from 'next/router';
import path from 'path';

const CategoryId = ({ products, categoryId }) => {
  const router = useRouter();

  console.log(products);
  console.log(categoryId);

  const { results } = products;

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
          <ProductFeed products={results} />
        </section>
      </main>
    </div>
  );
};
