import ProductFeed from './ProductFeed';

const ProductsFeedContainer = ({ products }) => {
  const { results, available_filters } = products;

  console.log(available_filters.values);
  return (
    <div className="flex flex-col">
      <p className="p-2">
        Búsquedas relacionadascampana cocinatermo electricothermomixtermo
        electrico peabody
      </p>
      <div className="flex mt-10">
        <div className="flex-col flex p-2 space-y-6">
          {/* Subhead, Title, Results */}
          <div>
            <h5>Descuentazos electronicaElectrodomésticos y Aires Ac.</h5>
            <h5 className="text-2xl">
              Descuentazos: Electrodomésticos y Aires Ac.
            </h5>
            <p className="text-gray-700 font-light text-sm">5.340 Results</p>
          </div>

          {/* Buttons */}
          <div className="my-5">
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
              <h5 className="font-medium text-sm">
                <span className="font-extrabold text-green-600">FULL</span> te
                ahorra envios
                <span className="font-light text-xs">
                  {' '}
                  <br></br>Con tu carrito de compras
                </span>
              </h5>

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

          {/* Official Stores */}
          <div>
            <h4 className="font-semibold text-lg">Official Stores</h4>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg">Categories</h4>
            <ul>
              {available_filters[0].values.map((filter) => (
                <li className="my-2">
                  <a href="#" className="text-gray-700">
                    {filter.name}<span className="text-gray-500 font-light text-sm">({Math.floor(filter.results / 100)})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg">Discounts</h4>
            <ul>
              {available_filters[2].values.map((filter) => (
                <li className="my-2">
                  <a href="#" className="text-gray-700">
                    {filter.name}({Math.floor(filter.results / 100)})
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* laconchae ut....... */}
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
