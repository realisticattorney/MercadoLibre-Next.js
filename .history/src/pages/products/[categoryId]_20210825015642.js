import ProductFeed from '../../components/ProductFeed';
import Header from '../components/Header';
import Banner from '../components/Banner';

const CategoryId = ({ products }) => {
  console.log(products);

  return (
    <div>
      {/* ProductFeed */}
      <ProductFeed products={products} />
    </div>
  );
};

return (
  <div className="bg-gray-200">
    <Head>
      <title>Amazon 2.0</title>
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


export default CategoryId;

export async function getServerSideProps(context) {
  try {
    const products = await fetch(`https://fakestoreapi.com/products`);
    return {
      props: {
        products: await products.json(),
      },
    };
  } catch (e) {
    return {
      error: e,
    };
  }
}
