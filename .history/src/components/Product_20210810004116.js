const Product = ({product}) => {

   const { id, title, price, description, category, image } = product;

   return (
      <div>
         <p>{category}</p>
         <Image src={}/>
      </div>
   )
}

export default Product
