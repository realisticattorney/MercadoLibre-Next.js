import Category from './Category';
im
//SSR (Server-side rendering) to fetch all of the categorys from that fake store API
//With React when you hit some app, eveything loads in your browser
//With Next you hit this other app, it loads a mid-server that does the work and renders everything (server-side) then delivers the html to the browser
const CategoryFeed = ({ categories }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-40 lg:-mt-52 mx-auto">
      {categories.slice(0,4).map((category) => (
        <Category key={category.id} category={category} />
      ))}

    <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />
      
      <div className="md:col-span-2">
      {categories.slice(4,5).map((category) => (
        <Category key={category.id} category={category} />
      ))}
      </div>

      {categories.slice(5,-1).map((category) => (
        <Category key={category.id} category={category} />
      ))}
      
    </div>
  );
};

export default CategoryFeed;
