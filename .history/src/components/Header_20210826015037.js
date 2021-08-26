import Image from 'next/image';
import {
  MenuIcon,
  LocationMarkerIcon,
  SearchIcon,
  ShoppingCartIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

//onClick a div...bro
//next.js Image component compress your image making it smaller w/o losing quality
//click on the component to go to the file of the component

const Header = () => {
  //lets check our session
  const [session] = useSession();

  const router = useRouter();

  const items = useSelector(selectItems);

  return (
    <header className="lg:grid lg:grid-cols-3 lg:grid-rows-2 bg-amazon_blue">
      <div className="px-2 flex items-center bg-amazon_blue flex-grow py-1 border-b border-gray-400 border-opacity-30 lg:contents ">
        {/*Left - Logo */}
        <div
          className="flex items-center cursor-pointer lg:col-span-1 lg:row-start-1 lg:col-start-1 lg:row-span-1"
          onClick={() => router.push('/')}
        >
          <Image
            src="/images/logo.jpg"
            width={50}
            height={32}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/*center - Search*/}
        <div className="flex items-center h-7 rounded-sm flex-grow bg-white cursor-pointer shadow-sm lg:col-span-1 lg:row-start-1 lg:col-start-2 lg:row-span-1">
          <SearchIcon className="h-6 p-1 pl-2 text-gray-400 active:mt-1" />
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-1 text-sm text-gray-600 placeholder-gray-300"
            type="text"
            placeholder="Search products, brands and more..."
          />
        </div>

        {/*right - */}
        <div className="text-amazon_blue-light flex items-center text-xs space-x-2 mx-2 whitespace-nowrap lg:col-span-1 lg:row-start-2 lg:col-start-3 lg:row-span-1">
        

          <button className="link flex items-center">
            <MenuIcon className="h-6 mr-1 text-amazon_blue-light" />
          </button>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-1.5 h-3 w-3.5 font-light bg-amazon_blue text-center rounded-full text-black">
              {items.length}
            </span>

            <ShoppingCartIcon
              onClick={() => router.push('/checkout')}
              className="h-7 font-thin text-amazon_blue-light"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-3 py-2 pl-2 bg-amazon_blue text-sm lg:contents">
      <div className="lg:col-span-1 lg:row-start-2 lg:col-start-1 lg:row-span-1">

        <button className="link flex items-center text-amazon_blue-light no-underline">
          <LocationMarkerIcon className="h-4 mr-1 text-amazon_blue-light" />
          <span className="text-xs font-light">
            Deliver to Analia Santa Fe 3388
          </span>
        </button>
      </div>

        <div className="flex lg:col-span-1 lg:row-start-2 lg:col-start-3 lg:row-span-1">
        <div
            onClick={session ? signOut : signIn}
            className="cursor-pointer link"
          >
            <p>{session ? `Hello, ${session.user.name}!` : 'Sign in'}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
        <button className="link flex items-center 
        text-amazon_blue-light no-underline">
          <ChevronRightIcon className="h-4 mr-1 text-gray-500 text-opacity-50" />
        </button>
        </div>
<div className="lg:col-span-1 lg:row-start-2 lg:col-start-2 lg:row-span-1">

        <p className="link ">Prime Video</p>
        <p className="link ">Amazon Business</p>
        <p className="link ">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
</div>
      </div>
    </header>
  );
};

export default Header;
