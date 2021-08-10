import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid"

const Product = ({product}) => {

   const { id, title, price, description, category, image } = product;

   const [rating] = useState(
      Math.round(Math.random() * 2) + 3
   );

   const [hasPrime] = useState(Math.random() < 0.5);

   return (
      <div className="relative flex flex-col m-5 bg-white z-30 p-10">
         <p className="absolute top-2 right-2 text-sm italic text-gray-400">{category}</p>
         <Image src={image} 
                height={200}
                width={200}
                objectFit="contain"
         />
         <h4 className="ay-3">{title}</h4>
         <div className="flex">
         {Array(rating).fill().map((_,i) =>
            <StarIcon className="h-5" />)}
         </div>
          <p>{description}</p>

          <p>${price}</p>
         {hasPrime && (
            <div>
               <img className="h-12" src="https://links.papareact.com/fdw" alt="" />
               <p>FREE Next-day Delivery</p>
            </div>
            )}
            <button>Add to Basket</button>
      </div>
   )
}

export default Product
