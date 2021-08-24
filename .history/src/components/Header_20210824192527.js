import Image from 'next/image';
import {
  MenuIcon,
  LocationMarkerIcon,
  SearchIcon,
  ShoppingCartIcon,
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
    <header>
      <div className="px-1 flex items-center bg-amazon_blue flex-grow py-1 border-b border-gray-400 border-opacity-30">
        {/*Left - Logo */}
        <div
          className="flex items-center flex-grow sm:flex-grow-0 cursor-pointer"
          onClick={() => router.push('/')}
        >
          {/*objectFit keeps the aspect ratio*/}
          <Image
            // onClick={() => router.push('/')}
            src="/images/logo.jpg"
            width={50}
            height={32}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/*center - Search*/}
        <div className="hidden sm:flex items-center h-7 rounded-sm flex-grow bg-white cursor-pointer shadow-sm">
          <SearchIcon className="h-6 p-1 pl-2 text-gray-400 active:mt-1" />
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-1 text-sm text-gray-600 placeholder-gray-300"
            type="text"
            placeholder="Search products, brands and more..."
          />
        </div>
        {/*right - */}
        <div className="text-white flex items-center text-xs space-x-2 mx-2 whitespace-nowrap">
          {/* <div
            onClick={session ? signOut : signIn}
            className="cursor-pointer link"
          >
            <p>{session ? `Hello, ${session.user.name}!` : 'Sign in'}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div> */}

          {/* <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div> */}
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
            {/* <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p> */}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-3 py-2 pl-2 bg-amazon_blue text-white text-sm">
        <button className="link flex items-center text-amazon_blue-light no-underline">
          <LocationMarkerIcon className="h-4 mr-1 text-amazon_blue-light" />
          <span className="text-xs font-light">Deliver to Analia Santa Fe 3388</span>
        </button>

        {/* <p className="link ">Prime Video</p>
        <p className="link ">Amazon Business</p>
        <p className="link ">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p> */}
      </div>
    </header>
  );
};

export default Header;