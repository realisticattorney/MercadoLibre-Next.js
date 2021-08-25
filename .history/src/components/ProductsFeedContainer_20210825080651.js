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
  
  <label for="toggleB" class="flex items-center cursor-pointer">
    <!-- toggle -->
    <div class="relative">
      <!-- input -->
      <input type="checkbox" id="toggleB" class="sr-only">
      <!-- line -->
      <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
      <!-- dot -->
      <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
    </div>
    <!-- label -->
    <div class="ml-3 text-gray-700 font-medium">
      Toggle Me!
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
