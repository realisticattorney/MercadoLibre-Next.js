import Category from './Category';

//SSR (Server-side rendering) to fetch all of the categorys from that fake store API
//With React when you hit some app, eveything loads in your browser
//With Next you hit this other app, it loads a mid-server that does the work and renders everything (server-side) then delivers the html to the browser
const CategoryFeed = ({ categories }) => {
  return (
    <div className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-6  mx-auto">
    
      {categories.slice(0, 2).map((category) => (
        <Category key={category.id} category={category} />
      ))}

      {/* <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      /> */}

      <div className="col-span-full md:col-span-2">
        {categories.slice(2, 6).map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>

      {categories.slice(6, 12).map((category) => (
        <Category key={category.id} category={category} />
      ))}

      <div className="col-span-full md:col-span-2">
        {categories.slice(12,13).map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>

      {categories.slice(13, 15).map((category) => (
        <Category key={category.id} category={category} />
      ))}


      <div className="col-span-full md:col-span-2">
        {categories.slice(15,16).map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>

      {categories.slice(16, 20).map((category) => (
        <Category key={category.id} category={category} />
      ))}


    </div>
  );
};

export default CategoryFeed;
