import { useState } from "react";


const Product = ({product}) => {

   const { id, title, price, description, category, image } = product;

   const [rating] = useState(0);

   return (
      <div>
         <p>{category}</p>
         <Image
         <Image src={image} 
                height={200}
                width={200}
                objectFit="contain"
         />
         <h4>{title}</h4>
      </div>
   )
}

export default Product
