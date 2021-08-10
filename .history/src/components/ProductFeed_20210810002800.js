//SSR (Server-side rendering) to fetch all of the products from that fake store API
//With React when you hit some app, eveything loads in your browser
//With Next you hit this other app, it loads a mid-server that does the work and renders everything (server-side) then delivers the html to the browser
const ProductFeed = ({ products }) => {
   return (
      <div className="grid grid-cols-3 gap-4 bg-white">
         {products.map(product => (
            <div key={product.id}>
            <span>{product.category}</span>
               <h2>{product.title}</h2>
               <img src={product.image} />
               <p>{product.description}</p>
               <p>{product.price}</p>
               </div>))}
      </div>
   )
}

export default ProductFeed
