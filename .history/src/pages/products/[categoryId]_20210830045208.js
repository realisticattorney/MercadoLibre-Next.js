import ProductFeed from '../../components/ProductFeed';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import fs from 'fs/promises';
import Head from 'next/head';
import { useRouter } from 'next/router';
import path from 'path';
import Image from 'next/image';
import ProductsFeedContainer from '../../components/ProductsFeedContainer';

const CategoryId = ({ products, categoryId }) => {
  const router = useRouter();

  console.log(products);

  const { results, available_filters } = products;

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
    </div>
  );
};

export default CategoryId;

export async function getStaticProps(context) {
  const { categoryId } = context.params;

  const products = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}&limit=10`
  ).then((res) => res.json());

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
  //get the paths from /data/categories.json id
  const categories = await 

  const paths = categories.map((category) => ({
    params: {
      categoryId: category.id,
    },
  }));

  return {
    paths,
    fallback: false,
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
