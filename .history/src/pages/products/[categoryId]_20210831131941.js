import Header from '../../components/Header';
import fs from 'fs/promises';
import Head from 'next/head';
import { useRouter } from 'next/router';
import path from 'path';
import Image from 'next/image';
import ProductsFeedContainer from '../../components/ProductsFeedContainer';
import Footer from '../../components/Footer';

const CategoryId = ({ products, categoryId }) => {
  const router = useRouter();
  console.log(products);

  // if (!products) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className=" bg-gray-200">
      <Head>
        <title>Mercado Libre</title>
      </Head>

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
      <Footer />
    </div>
  );
};

export default CategoryId;

export async function getStaticProps(context) {
  const { categoryId } = context.params;

  const products = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}&limit=11`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  if (products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products,
      categoryId,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const jsonCategories = await fs.readFile(
    path.join(process.cwd(), 'data', 'categories.json')
  );
  const categories = JSON.parse(jsonCategories);
  const paths = categories.categories.map((category) => ({
    params: {
      categoryId: category.id,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

// export async function getServerSideProps(context) {
//   const { categoryId } = context.params;

//   try {
//     const products = await fetch(
//       `https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}&limit=10`
//     );
//     return {
//       props: {
//         products: await products.json(),
//         categoryId,
//       },
//     };
//   } catch (e) {
//     return {
//       error: e,
//     };
//   }
// }
