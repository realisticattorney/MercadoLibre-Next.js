import FilterComponent from './FilterComponent';
import ProductFeed from './ProductFeed';

const ProductsFeedContainer = ({ products }) => {
  const { results, available_filters, filters } = products;

  const indexOfFilters = [0, 2, 3, 4, 7, 8, 15, 22];

  const shownFilters = available_filters.filter((filter, index) =>
    indexOfFilters.includes(index)
  );

  console.log(available_filters);
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

          {/* Filters */}
          {shownFilters.map((filter, index) => (
            <FilterComponent
              key={filter.id}
              itemNumber={index}
              filter={filter}
            />
          ))}
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
