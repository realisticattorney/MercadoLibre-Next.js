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

          <div className="bg-white p-2 m-2 mr-5 border-gray-300 border rounded-sm">
            <h5 className="font-medium">Llegan hoy</h5>

            <div class="flex items-center justify-center w-full mb-12">
              <div class="relative">
                <input type="checkbox" id="toggleB" class="sr-only" />
                <div class="block bg-gray-600 w-6 h-4 rounded-full"></div>
                <div class="dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition"></div>
              </div>
            </div>
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
