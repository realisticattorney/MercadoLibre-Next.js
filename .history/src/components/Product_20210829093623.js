import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { HeartIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import { toast } from 'react-toastify';
//line-clamp to interrupt text once it gets too long
//focus:ring-0 to remove the focus
const Product = ({ product }) => {
  const {
    id,
    title,
    price,
    thumbnail,
    condition,
    eshop,
    original_price,
    shipping,
  } = product;

  const [rating] = useState(Math.round(Math.random() * 2) + 3);

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
        position: 'bottom-right',
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
    <div className="relative flex flex-col m-2 bg-white z-30 shadow-sm transition duration-300 hover:shadow-2xl border border-gray-300 rounded-md ">
    <div>
      <button icon={HeartIcon} className="absolute z-50 h-6 right-3 top-3 text-blue-500 heroicon-sw-1" ></button>

      </div>
      <div className="border-b text-center">
        <Image src={thumbnail} height={200} width={200} objectFit="contain" />
      </div>
      <div className="p-5">
        {original_price && (
          <p className="text-xs line-through text-gray-400">
            $ {original_price}
          </p>
        )}
        <p className="mb-5 text-3xl font-regular">$ {price}</p>
        {shipping.free_shipping === true && (
          <div className="flex items-center space-x-2 -mt-5">
            <p className="text-sm text-green-500">Free Shipping</p>
          </div>
        )}
        <p className="text-xs my-2 line-clamp-2">
          {title}
          {eshop && <span className="text-gray-500 text-xs line-clamp-2">
            sold by {eshop.nick_name}
          </span>}
        </p>

        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-blue-500" />
            ))}
        </div>
      </div>
      <button
        onClick={addItemToBasket}
        className="mt-auto button focus:ring-0 text-white  rounded-br-md rounded-bl-md"
      >
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
