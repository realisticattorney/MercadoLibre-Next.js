import FilterComponent from './FilterComponent';
import ProductFeed from './ProductFeed';

const ProductsFeedContainer = ({ products }) => {
  const { results, available_filters, filters } = products;

  console.log(available_filters);

  const indexOfFilters = [0, 2, 3, 4, 7, 8, 15, 22];

  

  return (
    <div className="flex flex-col">
      {/* <p className="p-2">
        Búsquedas relacionadascampana cocinatermo electricothermomixtermo
        electrico peabody
      </p> */}
      <div className="flex mt-10">
        <div className="flex-col flex p-2 space-y-6">
          {/* Subhead, Title, Results */}
          <div>
            <h5 className="text-gray-500 text-sm font-medium">
              {filters[0]?.values[0].name} {' > '} {filters[0]?.values[0].name}
            </h5>
            <h5 className="text-3xl text-gray-800 font-medium">
              {filters[0]?.values[0].name}
            </h5>
            <p className="text-gray-700 font-light text-sm">5.340 Results</p>
          </div>

          {/* Buttons */}
          <div className="my-5">
            <div className="flex bg-white p-3 m-2 mr-5 border-gray-300 border rounded-md justify-between">
              <h5 className="font-medium">Llegan hoy</h5>

              <div className="flex justify-center">
                <label
                  htmlFor="toogleButton"
                  className="flex items-center cursor-pointer"
                >
                  <div className="relative">
                    <input
                      id="toogleButton"
                      type="checkbox"
                      className="hidden"
                    />
                    <div className="toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner"></div>
                    <div className="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"></div>
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

              <div className="flex justify-center">
                <label
                  htmlFor="toogleButtonTwo"
                  className="flex items-center cursor-pointer"
                >
                  <div className="relative">
                    <input
                      id="toogleButtonTwo"
                      type="checkbox"
                      className="hidden"
                    />
                    <div className="toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner"></div>
                    <div className="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"></div>
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
            <FilterComponent
              key={available_filters[0].id}
              availableFilters={available_filters}
              itemNumber={0}
            />
          </div>

          {/* Discounts */}
          <div>
            <h4 className="font-semibold text-lg">Discounts</h4>
            <FilterComponent
              key={available_filters[2].id}
              availableFilters={available_filters}
              itemNumber={2}
            />
          </div>
          {/* Shipping Cost */}
          <div>
            <h4 className="font-semibold text-lg">Shipping Cost</h4>
            <FilterComponent
              key={available_filters[15]?.id}
              availableFilters={available_filters}
              itemNumber={15}
            />
          </div>

          {/* Tipo de entrega */}
          <div>
            <h4 className="font-semibold text-lg">Tipo de entrega</h4>
            <FilterComponent
              key={available_filters[7].id}
              availableFilters={available_filters}
              itemNumber={7}
            />
          </div>
          {/* Location */}
          <div>
            <h4 className="font-semibold text-lg">Location</h4>
            <FilterComponent
              key={available_filters[3].id}
              availableFilters={available_filters}
              itemNumber={3}
            />
          </div>
          {/* Price Range */}
          <div>
            <h4 className="font-semibold text-lg">Price Range</h4>
            <FilterComponent
              key={available_filters[4].id}
              availableFilters={available_filters}
              itemNumber={4}
            />
          </div>
          {/* Best sellers */}
          <div>
            <h4 className="font-semibold text-lg">Price Range</h4>
            <FilterComponent
              key={available_filters[8].id}
              availableFilters={available_filters}
              itemNumber={8}
            />
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
