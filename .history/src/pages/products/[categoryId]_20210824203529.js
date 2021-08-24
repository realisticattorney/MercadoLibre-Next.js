const [categoryId] = () => {
   return (
      <div>
         
      </div>
   )
}

export default [category]

export async function getServerSideProps(context) {

   try {
   const products = await fetch(`https://fakestoreapi.com/products`)
   return {
     props: {
       products: await products.json()
     }
   };
 } catch (e) {
   return {
     error: e
   };
 }
 
 }