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
