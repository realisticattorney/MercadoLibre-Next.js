//SSR (Server-side rendering) to fetch all of the products from that fake store API
//With React when you hit some app, eveything loads in your browser
//With Next you hit this other app, it loads a mid-server that does the work and renders everything (server-side) then delivers the html to the browser
const ProductFeed = ({ products }) => {
   return (
      <div>
         {products.map(product => (
            <div key={product.id}>
               <h2>{product.name}</h2>
               <img src={product.image} />
               <p>{product.description}</p>
               </div>}
      </div>
   )
}

export default ProductFeed
