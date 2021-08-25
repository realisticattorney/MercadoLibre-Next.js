import ProductFeed from './ProductFeed';

const ProductsFeedContainer = ({ products }) => {
  const { results } = products;

  return (
    <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-6 mx-auto">
      <div className="col-span-1">
        <p className="py-5">
          Búsquedas relacionadascampana cocinatermo electricothermomixtermo
          electrico peabody
        </p>

        <h5>Descuentazos electronicaElectrodomésticos y Aires Ac.</h5>
        <p className="text-gray-700 font-light text-sm">5.340 Results</p>
        <h5 className="text-2xl">
          Descuentazos: Electrodomésticos y Aires Ac.
        </h5>
      </div>

      <div className="col-span-1 md:col-span-5">
        {/* ProductFeed */}
        <ProductFeed products={results} />
      </div>
    </div>
  );
};

export default ProductsFeedContainer;
