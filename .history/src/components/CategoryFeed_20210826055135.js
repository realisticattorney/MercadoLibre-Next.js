import Category from './Category';

//SSR (Server-side rendering) to fetch all of the categorys from that fake store API
//With React when you hit some app, eveything loads in your browser
//With Next you hit this other app, it loads a mid-server that does the work and renders everything (server-side) then delivers the html to the browser
const CategoryFeed = ({ categories }) => {
  return (
    <div className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-3 mx-auto">
      {/*   
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
 */}

      {categories.slice(0, 8).map((category) => (
        <Category key={category.id} category={category} />
      ))}
      <div className="text-center justify-center col-span-full text-gray-600 text-sm mt-10 mb-1">
        <h4>BEST DEALS FOR YOU</h4>
      </div>
      {categories.slice(8, 10).map((category) => (
        <Category key={category.id} category={category} />
      ))}
      {/* 24hour offers */}
      <div className="text-center justify-center col-span-full text-gray-600 text-sm mt-10 mb-1 ">
        <h4>MORE DEALS ON YOUR FAVORITE PRODUCTS!</h4>
      </div>
      {categories.slice(10, 20).map((category) => (
        <Category key={category.id} category={category} />
      ))}


      {/* <img
        className="lg:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      /> */}

      {/* <div className="col-span-full lg:col-span-2">
        {categories.slice(2, 3).map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
      <div className="col-span-full lg:col-span-2">
        {categories.slice(3, 4).map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
      <div className="col-span-full lg:col-span-2">
        {categories.slice(4, 5).map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
      <div className="col-span-full lg:col-span-2">
        {categories.slice(5, 6).map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>


      {categories.slice(6, 8).map((category) => (
        <Category key={category.id} category={category} />
      ))}

      <div className="lg:col-span-3">
      {categories.slice(8, 9).map((category) => (
        <Category key={category.id} category={category} />
      ))}
      </div>
      
      <div className="lg:col-span-3">
      {categories.slice(9, 10).map((category) => (
        <Category key={category.id} category={category} />
      ))}
      </div>
      
      {categories.slice(10, 12).map((category) => (
        <Category key={category.id} category={category} />
      ))}


      <div className="col-span-full lg:col-span-2">
        {categories.slice(12,13).map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>

      {categories.slice(13, 15).map((category) => (
        <Category key={category.id} category={category} />
      ))}


      <div className="col-span-full lg:col-span-2">
        {categories.slice(15,16).map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>

      {categories.slice(16, 20).map((category) => (
        <Category key={category.id} category={category} />
      ))}
 */}
    </div>
  );
};

export default CategoryFeed;
