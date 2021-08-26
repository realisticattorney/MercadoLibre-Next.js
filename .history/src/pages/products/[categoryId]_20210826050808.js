import ProductFeed from '../../components/ProductFeed';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
// import fs from 'fs/promises';
import { useRouter } from 'next/router';
import path from 'path';

const CategoryId = ({ products, categoryId }) => {
  const router = useRouter();

  console.log(products);

  const { results, available_filters } = products;

  return (
    <div className=" bg-gray-200">
      {/* <Head>
        <title>Mercado Libre</title>
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

export default CategoryId;

export async function getServerSideProps(context) {
  const { categoryId } = context.params;

  try {
    const products = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}&limit=10`
    );
    return {
      props: {
        products: await products.json(),
        categoryId,
      },
    };
  } catch (e) {
    return {
      error: e,
    };
  }
}
// export async function getStaticProps(context) {
//   const { categoryId } = context.params;
//   let category;
//   if(categoryId === 1) {
//     category = "MLA1055"
//   }

//   const filePath = path.join(process.cwd(), 'data', 'products.json');
//   const jsonProductsData = await fs.readFile(filePath);
//   const productsData = JSON.parse(jsonProductsData);

//   return {
//     props: {
//       categories: productsData.results,
//       categoryId: category,
//     },
//   };
// }

// export async function getStaticPaths() {

//   return {
//     paths: [{ params: { categoryId: "1"  } }],
//     fallback: false,
//   };
// }
