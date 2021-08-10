import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed';

export default function Home( { products }) {

  console.log(products)
  return (
    <div className="bg-gray-500">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}


//To do any server-side 
// GET >> https://fakestoreapi.com/products
export async function getServerSideProps(context) {

  try {
  const products = await fetch(`https://fakestoreapi.com/products`)
  return {
    props: {
      products: await products.json()
    }
  };
} catch (e) {
  return {
    error: e
  };
}

}