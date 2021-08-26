import Image from 'next/image';
import {
  MenuIcon,
  LocationMarkerIcon,
  SearchIcon,
  ShoppingCartIcon,
  ChevronRightIcon,
  UserCircleIcon,
  BellIcon,
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
    <header className="lg:grid lg:grid-flow-col lg:grid-rows-2 bg-amazon_blue items-center">
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
        <div className="flex items-center h-7 rounded-sm flex-grow bg-white cursor-pointer shadow-sm lg:col-span-1 lg:row-start-1 lg:col-start-2 lg:row-span-1 lg:min-w-[400px]">
          <SearchIcon className="h-6 p-1 pl-2 text-gray-400 active:mt-1" />
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-1 text-sm text-gray-600 placeholder-gray-300"
            type="text"
            placeholder="Search products, brands and more..."
          />
        </div>

        {/*right - */}
        <div className="text-amazon_blue-light flex items-center text-xs space-x-2 mx-2 whitespace-nowrap lg:col-span-1 lg:row-start-2 lg:col-start-3 lg:row-span-1 flex-row-reverse">
          <button className="link flex items-center">
            <MenuIcon className="h-6 mr-1 text-amazon_blue-light lg:hidden" />
          </button>

          <div className="relative link flex items-center ">
            <span className="absolute top-0 right-1.5  h-3 w-3.5 font-light bg-amazon_blue text-center rounded-full text-black">
              {items.length}
            </span>

            <ShoppingCartIcon
              onClick={() => router.push('/checkout')}
              className="h-7 font-thin text-amazon_blue-light"
            />
          </div>
          <button className="link flex items-center">
            <BellIcon className="hidden h-6  text-amazon_blue-light lg:inline-flex" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-3 py-2 pl-2 bg-amazon_blue text-sm lg:contents">
        <div className="lg:col-span-1 lg:row-start-2 lg:col-start-1 lg:row-span-1">
          <button className="link flex items-center text-amazon_blue-light no-underline">
            <LocationMarkerIcon className="h-4 mr-1 text-amazon_blue-light" />
            <span className="text-xs font-light text-left">
              Deliver to{' '}
              <span className="lg:line-clamp-2">Analia Santa Fe 3388</span>
            </span>
          </button>
        </div>

        <div className="flex lg:col-span-1 lg:row-start-2 lg:col-start-3 lg:row-span-1 space-x-3">
          <div className="flex cursor-pointer" onClick={session ? signOut : signIn}>
            <UserCircleIcon className="h-6 mr-0.5 text-amazon_blue-light" />
            <p>{session ? `${session.user.name}` : 'Sign in'}</p>
          </div>
          <div className="cursor-pointer">
            <p>{session ? `My orders` : 'Login'}</p>
          </div>
          <div className="cursor-pointer">
            <p>{session ? `Favorites` : 'My orders'}</p>
          </div>
          <button
            className="link flex items-center 
        text-amazon_blue-light no-underline  lg:hidden"
          >
            <ChevronRightIcon className="h-4 mr-1 text-gray-500 text-opacity-50" />
          </button>
        </div>
        <div className="lg:col-span-1 lg:row-start-2 lg:col-start-2 lg:row-span-1 hidden lg:flex space-x-3">
          <p className="link hidden lg:inline-flex">Categories</p>
          <p className="link hidden lg:inline-flex">Offers</p>
          <p className="link hidden lg:inline-flex">History</p>
          <p className="link hidden xl:inline-flex">Supermarket</p>
          <p className="link hidden xl:inline-flex">Fashion</p>
          <p className="link hidden lg:inline-flex">Sell</p>
          <p className="link hidden lg:inline-flex">Help</p>
        </div>
      </div>

      <div className="hidden lg:flex lg:col-span-1 lg:row-start-2 lg:col-start-2 lg:row-span-1">

      </div>
    </header>
  );
};

export default Header;
