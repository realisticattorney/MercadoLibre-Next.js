import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import { toast } from 'react-toastify';
//line-clamp to interrupt text once it gets too long
//focus:ring-0 to remove the focus
const Product = ({ product }) => {
  const { id, title, price, thumbnail, condition, eshop, original_price, shipping } =
    product;

  const [rating] = useState(Math.round(Math.random() * 2) + 3);

  const [hasPrime] = useState(Math.random() < 0.5);

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(product));
    console.log(product);
    toast.success(
      <>
        <span className="font-bold">Added to basket!</span>
        <br />
        {product.title.slice(0, 40)}
        {product.title.length > 40 ? '…' : ''}
      </>,
      {
        position: 'top-right',
        autoClose: 2900,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 20,
        progress: undefined,
      }
    );
  };

  return (
    <div className="relative flex flex-col m-2 bg-white z-30 p-5 shadow-sm transition duration-300 hover:shadow-2xl">
      <p className="absolute top-2 right-2 text-sm italic text-gray-400">
        {condition}
      </p>
      <Image src={thumbnail} height={200} width={200} objectFit="contain" />
      {original_price && (
        <p className="text-xs line-through text-gray-400">$ {original_price}</p>
      )}
      <p className="mb-5 text-3xl font-regular">$ {price}</p>
      {(shipping.free_shipping === true) && (
        <div className="flex items-center space-x-2 -mt-5">
          <p className="text-sm text-green-500">Free Shipping</p>
        </div>
      )}
      <p className="text-xs my-2 line-clamp-2">
        {title}
        <span className="text-gray-500 text-xs line-clamp-2">
          sold by {eshop.nick_name}
        </span>
      </p>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <button onClick={addItemToBasket} className="mt-auto button focus:ring-0">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
