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

          <div className="flex bg-white p-3 m-2 mr-5 border-gray-300 border rounded-md justify-between">
            <h5 className="font-medium">Llegan hoy</h5>

            <div class="flex justify-center">
              <label
                for="toogleButton"
                class="flex items-center cursor-pointer"
              >
                <div class="relative">
                  <input id="toogleButton" type="checkbox" class="hidden" />
                  <div class="toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner"></div>
                  <div class="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                </div>
              </label>
            </div>
          </div>

          <div className="flex bg-white p-3 m-2 mr-5 border-gray-300 border rounded-md justify-between">
            <h5 className="font-medium text-"><span className="font-extrabold text-green-600">FULL</span>te ahorra envios</h5>

            <div class="flex justify-center">
              <label
                for="toogleButton"
                class="flex items-center cursor-pointer"
              >
                <div class="relative">
                  <input id="toogleButton" type="checkbox" class="hidden" />
                  <div class="toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner"></div>
                  <div class="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                </div>
              </label>
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
