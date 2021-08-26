import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

const CheckoutProduct = ({ product }) => {
  const { id, title, price, category, thumbnail, shipping } = product;

  const [rating] = useState(Math.round(Math.random() * 2) + 3);

  const [hasPrime] = useState(Math.random() < 0.5);

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(product));
  };
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5 pb-2 border-b">
      <Image src={thumbnail} width={200} height={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p className="text-gray-700 font-semibold text-lg">{title}</p>

        {shipping.free_shipping === true && (
          <div className="flex items-center space-x-2">
            <p className="text-sm text-green-500 ">Free Shipping</p>
          </div>
        )}
        <div className="flex flex-col max-w-[150px] space-y-3">
          <button
            onClick={addItemToBasket}
            className="link text-sm text-left mt-3 cursor-pointer no-underline focus:no-underline text-blue-600"
          >
            Add to Basket
          </button>
          <button onClick={removeItemFromBasket}   className="link text-sm text-left mt-3 cursor-pointer no-underline focus:no-underline text-blue-600"
          >
            Remove from Basket
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <p className="mb-5 text-3xl font-regular text-gray-700">$ {price}</p>
      </div>
    </div>
  );
};

export default CheckoutProduct;
