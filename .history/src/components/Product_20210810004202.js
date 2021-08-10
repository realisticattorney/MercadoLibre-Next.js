const Product = ({product}) => {

   const { id, title, price, description, category, image } = product;

   return (
      <div>
         <p>{category}</p>
         <Image src={image} 
                height={200}
                width={200}
                objectFit="cover"

         />
      </div>
   )
}

export default Product
