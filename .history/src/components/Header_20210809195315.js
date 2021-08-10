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
      <div className="hidden sm:flex items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500">
        <input className="p-2 h-full" type="text" />
        <SearchIcon 
          className="h-12 p-4"
        />
      </div>
      </div>

      <div></div>
    </header>
  );
};

export default Header;
