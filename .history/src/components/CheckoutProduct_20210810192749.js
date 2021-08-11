import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

const CheckoutProduct = ({ product }) => {
  const { id, title, price, description, category, image } = product;

  const [rating] = useState(Math.round(Math.random() * 2) + 3);

  const [hasPrime] = useState(Math.random() < 0.5);

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(product));
  };
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({id}));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} width={200} height={200} objectFit="contain" />
      {/* Middle Section */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <p className="font-semibold">${price}</p>

        {hasPrime && (
           <div className="flex items-center space-x-2">
            <img 
               loading="lazy"
               src="https://links.papareact.com/fdw" 
               alt=""
               className="w-12"
                />
                <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
           </div>
           )}
      </div>

      {/* Right Section */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end
      ">
         <p></p>
         <button onClick={addItemToBasket} className="button">Add to Basket</button>
         <button onClick={removeItemFromBasket} className="button">Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
