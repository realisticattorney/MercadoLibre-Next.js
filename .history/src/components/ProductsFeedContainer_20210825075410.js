import ProductFeed from './ProductFeed';

const ProductsFeedContainer = ({ products }) => {
  const { results } = products;

  return (
    <div className="flex flex-col">
      <p className="m-1 i">
        Búsquedas relacionadascampana cocinatermo electricothermomixtermo
        electrico peabody
      </p>
      <div className="flex mt-10">
        <div className="flex-col flex">
          <h5>Descuentazos electronicaElectrodomésticos y Aires Ac.</h5>
          <p className="text-gray-700 font-light text-sm">5.340 Results</p>
          <h5 className="text-2xl">
            Descuentazos: Electrodomésticos y Aires Ac.
          </h5>
        </div>

        <div className="col-span-2 md:col-span-5">
          {/* ProductFeed */}
          <ProductFeed products={results} />
        </div>
      </div>
    </div>
  );
};

export default ProductsFeedContainer;
