import Category from './Category';

//SSR (Server-side rendering) to fetch all of the categorys from that fake store API
//With React when you hit some app, eveything loads in your browser
//With Next you hit this other app, it loads a mid-server that does the work and renders everything (server-side) then delivers the html to the browser
const CategoryFeed = ({ categories }) => {
  return (
    <div className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-6 mx-auto">
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

    </div>
  );
};

export default CategoryFeed;
