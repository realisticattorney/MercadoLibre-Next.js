import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

const CheckoutProduct = ({product}) => {

   const { id, title, price, description, category, image } = product;

   const [rating] = useState(Math.round(Math.random() * 2) + 3);
 
   const [hasPrime] = useState(Math.random() < 0.5);
 
   const dispatch = useDispatch()
 
   const addItemToBasket = () => {
    dispatch(addToBasket(product));
   }
   
   
   return (
      <div className="grid grid-cols-5">
         <Image 
            src={image}
            width={200}
            height={200}
            objectFit="contain"
         />
         {/*
      </div>
   )
}

export default CheckoutProduct
