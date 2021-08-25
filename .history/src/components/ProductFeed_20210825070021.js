import Product from './Product';
//SSR (Server-side rendering) to fetch all of the products from that fake store API
//With React when you hit some app, eveything loads in your browser
//With Next you hit this other app, it loads a mid-server that does the work and renders everything (server-side) then delivers the html to the browser
const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto mt-20mb-10">
      {products.slice(0,4).map((product) => (
        <Product key={product.id} product={product} />
      ))}

    <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />
      
      <div className="md:col-span-2">
      {products.slice(4,5).map((product) => (
        <Product key={product.id} product={product} />
      ))}
      </div>

      {products.slice(5,20).map((product) => (
        <Product key={product.id} product={product} />
      ))}
      
    </div>
  );
};

export default ProductFeed;
