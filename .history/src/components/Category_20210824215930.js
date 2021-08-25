   import Image from 'next/image';
   //line-clamp to interrupt text once it gets too long
   //focus:ring-0 to remove the focus
   const Category = ({ category }) => {

     const { id, name, src } = product;

     return (
       <div className="relative flex flex-col m-5 bg-white z-30 p-10 hover:shadow-md">
         <p className="absolute top-2 right-2 text-sm italic text-gray-400">
           {category}
         </p>
         <Image src={image} height={200} width={200} objectFit="contain" />
         <h4 className="my-3">{title}</h4>
         <p className="text-xs my-2 line-clamp-2">{description}</p>
   
         <p className="mb-5 font-semibold">${price}</p>
         {hasPrime && (
           <div className="flex items-center space-x-2 -mt-5">
             <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
             <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
           </div>
         )}
         <button onClick={addItemToBasket} className="mt-auto button focus:ring-0">
           Add to Basket
         </button>
       </div>
     );
   };
export default Category
