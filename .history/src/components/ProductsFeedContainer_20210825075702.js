import ProductFeed from './ProductFeed';

const ProductsFeedContainer = ({ products }) => {
  const { results } = products;

  return (
    <div className="flex flex-col">
      <p className="p-2">
        Búsquedas relacionadascampana cocinatermo electricothermomixtermo
        electrico peabody
      </p>
      <div className="flex mt-10">
        <div className="flex-col flex p-2">
          <h5>Descuentazos electronicaElectrodomésticos y Aires Ac.</h5>
          <h5 className="text-2xl">
            Descuentazos: Electrodomésticos y Aires Ac.
          </h5>
          <p className="text-gray-700 font-light text-sm">5.340 Results</p>

          <div className="bg-white p-2 m-2 border-gray-200">
             <h5 className="font-medium">Llegan hoy</h5>
          </div>
          
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
