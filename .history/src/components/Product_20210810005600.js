import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid"

const Product = ({product}) => {

   const { id, title, price, description, category, image } = product;

   const [rating] = useState(
      Math.round(Math.random() * 3) + 3
   );

   return (
      <div>
         <p>{category}</p>
         <Image src={image} 
                height={200}
                width={200}
                objectFit="contain"
         />
         <h4>{title}</h4>
         <div className="flex">
         {Array(rating).fill().map((_,i) =>
            <StarIcon className="h-5" />)}
         </div>
      </div>
   )
}

export default Product
