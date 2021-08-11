import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

const CheckoutProduct = ({ product }) => {
  const { id, title, price, description, category, image } = product;

  const [rating] = useState(Math.round(Math.random() * 2) + 3);

  const [hasPrime] = useState(Math.random() < 0.5);

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(product));
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
           <div className="text-xs text-green-500">
            <img src="" alt="" />
           </div>)}
      </div>
    </div>
  );
};

export default CheckoutProduct;
