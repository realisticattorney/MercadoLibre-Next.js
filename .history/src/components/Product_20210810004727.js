import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid"

const Product = ({product}) => {

   const { id, title, price, description, category, image } = product;

   const [rating] = useState(0);

   return (
      <div>
         <p>{category}</p>
         <Image src={image} 
                height={200}
                width={200}
                objectFit="contain"
         />
         <h4>{title}</h4>
         <div>
         {Array(rating).fill(0).map((_, i) =>
            <StarIcon key={i}
         </div>
      </div>
   )
}

export default Product
