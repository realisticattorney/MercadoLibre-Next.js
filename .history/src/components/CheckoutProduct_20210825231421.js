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
    <div className="grid grid-cols-5">
      <Image src={thumbnail} width={200} height={200} objectFit="contain" />
      {/* Middle Section */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        {/* <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div> */}

       
        {shipping.free_shipping === true && (
          <div className="flex items-center space-x-2 -mt-5">
            <p className="text-sm text-green-500">Free Shipping</p>
            
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button">
          Add to Basket
        </button>
        <button onClick={removeItemFromBasket} className="button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
