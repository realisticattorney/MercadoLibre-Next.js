import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import { toast } from 'react-toastify';
//line-clamp to interrupt text once it gets too long
//focus:ring-0 to remove the focus
const Product = ({ product }) => {
  const { id, title, price, thumbnail, condition, eshop, original_price } = product;

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
    <div className="relative flex flex-col m-2 bg-white z-30 p-5 hover:shadow-md">
      <p className="absolute top-2 right-2 text-sm italic text-gray-400">
        {condition}
      </p>
      <Image src={thumbnail} height={200} width={200} objectFit="contain" />
      <p className="mb-5 font-semibold">${original_price}</p>
      <p className="mb-5 font-semibold">${price}</p>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
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
