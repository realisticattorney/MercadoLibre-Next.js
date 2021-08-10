import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid"
//line-clamp to interrupt text once it gets too long
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
         <h4 className="my-3">{title}</h4>
         <div className="flex">
         {Array(rating).fill().map((_,i) =>
            <StarIcon className="h-5 text-yellow-500" />)}
         </div>
          <p className="text-xs my-2 line-clamp-2">{description}</p>

          <p className="mb-5 font-semibold">${price}</p>
         {hasPrime && (
            <div className="flex items-center space-x-2 -mt-5">
               <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
               <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
            </div>
            )}
            <button className="mt-auto button font-semibold">Add to Basket</button>
      </div>
   )
}

export default Product
