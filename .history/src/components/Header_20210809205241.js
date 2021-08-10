import Image from 'next/image';
import {
   MenuIcon,
   SearchIcon,
   ShoppingCartIcon,
} from '@heroicons/react/outline';



//sticky header
//next.js Image component compress your image making it smaller w/o losing quality

const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
      {/*Left - Logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          {/*objectFit keeps the aspect ratio*/}
          <Image
            src="https://links.papareact.com/f90"
            width={120}
            height={35}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/*center - Search*/}
      <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
        <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
        <SearchIcon 
          className="h-12 p-4"
        />
      </div>
      {/*right - */}
      <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
         <div className="link">
            <p>Hello German Aquila!</p>
            <p className="front-">Account & Lists</p>
         </div>

         <div className="link">
            <p>Returns</p>
            <p className="front-">& Orders</p>
         </div>

         <div className="link">
            <ShoppingCartIcon className="h-10"/>
            <p className="front-">Basket</p>
         </div>
         
      </div>
      </div>

      
    </header>
  );
};

export default Header;
