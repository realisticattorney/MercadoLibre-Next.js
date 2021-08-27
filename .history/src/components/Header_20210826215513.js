import Image from 'next/image';
import {
  MenuIcon,
  LocationMarkerIcon,
  SearchIcon,
  ShoppingCartIcon,
  ChevronRightIcon,
  ChevronDownIcon,
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
    <header className="lg:grid lg:grid-flow-col lg:grid-rows-2 bg-mercadolibre items-center px-2 lg:pl-3 lg:pt-1">
      <div className="px-2 flex items-center bg-mercadolibre flex-grow py-1 border-b border-gray-400 border-opacity-30 lg:contents ">
        {/*Left - Logo */}
        <div
          className="flex items-center cursor-pointer lg:col-span-1 lg:row-start-1 lg:col-start-1 lg:row-span-1"
          onClick={() => router.push('/')}
        >
          <div className="relative w-12 h-9">
            <Image
              src="/images/logo.jpg"
              // width={50}
              // height={32}
              // objectFit="contain"
              layout="fill"
              className="cursor-pointer"
            />
          </div>
          <h2 className="text-xl text-mercadolibre-blue line-clamp-2 font-extrabold opacity-95">
            mercado <span className="line-clamp-2 -mt-2.5">libre</span>
          </h2>
        </div>

        {/*center - Search*/}
        <div className="flex items-center h-7 rounded-sm flex-grow bg-white cursor-pointer shadow-sm lg:col-span-1 lg:row-start-1 lg:col-start-2 lg:row-span-1 lg:min-w-[400px] lg:flex-row-reverse lg:h-9 lg:p-2">
          <SearchIcon className="h-6 p-1 pl-2 text-gray-400 active:mt-1 lg:h-7 lg:border-l lg:pl-3 " />
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-1 text-sm text-gray-600 placeholder-gray-300 lg:text-base"
            type="text"
            placeholder="Search products, brands and more..."
          />
        </div>

        {/*right - */}
        <div className="text-mercadolibre-blue flex items-center text-xs space-x-2 whitespace-nowrap lg:col-span-1 lg:row-start-2 lg:col-start-3 lg:row-span-1 flex-row-reverse">
          <button className="link flex items-center">
            <MenuIcon className="h-6 mr-1 text-mercadolibre-blue lg:hidden" />
          </button>

          <div className="relative link flex items-center ">
            <span className="absolute top-0 right-1.5  h-3 w-3.5 font-light bg-mercadolibre text-center rounded-full text-black">
              {items.length}
            </span>

            <ShoppingCartIcon
              onClick={() => router.push('/checkout')}
              className="h-7 font-thin text-mercadolibre-blue"
            />
          </div>
          <button className="link flex items-center">
            <BellIcon className="hidden h-6  text-mercadolibre-blue lg:inline-flex" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-3 py-2 pl-2 bg-mercadolibre text-sm lg:contents">
        <div className="lg:col-span-1 lg:row-start-2 lg:col-start-1 lg:row-span-1">
          <button className="link flex items-center text-mercadolibre-blue no-underline">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 lg:h-7 mr-1 text-mercadolibre-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg> */}
            <LocationMarkerIcon className="h-4 lg:h-7 mr-1 text-mercadolibre-blue" />
            <span className="text-xs font-light text-left">
              Deliver to{' '}
              <span className="lg:line-clamp-2 lg:text-sm -mt-1">
                Analia Santa Fe 3388
              </span>
            </span>
          </button>
        </div>

        <div className="flex lg:col-span-1 lg:row-start-2 lg:col-start-3 lg:row-span-1 space-x-3 items-center">
          <div
            className="flex cursor-pointer items-center"
            onClick={session ? signOut : signIn}
          >
            <UserCircleIcon className="h-6 mr-1 text-mercadolibre-blue" />
            <p>{session ? `${session.user.name.split(' ')[1]}` : 'Sign in'}</p>
            <ChevronDownIcon className="h-3.5 text-gray-500 text-opacity-50" />
          </div>
          <div className="cursor-pointer">
            <p>{session ? `My orders` : 'Login'}</p>
          </div>
          <div className="flex cursor-pointer  items-center">
            <p>{session ? `Favorites` : 'My orders'}</p>
            <ChevronDownIcon className="h-3.5 text-gray-500 text-opacity-50" />
          </div>
          <button
            className="link flex items-center 
        text-mercadolibre-blue no-underline  lg:hidden"
          >
            <ChevronRightIcon className="h-4 mr-1 text-gray-500 text-opacity-50" />
          </button>
        </div>
        <div className="lg:col-span-1 lg:row-start-2 lg:col-start-2 lg:row-span-1 hidden lg:flex space-x-4 text-gray-600 font-light">
          <div className="flex items-center">
            <p className="link hidden lg:inline-flex">Categories</p>
            <ChevronDownIcon className="h-3 text-gray-500 text-opacity-50" />
          </div>
          <p className="link hidden lg:inline-flex">Offers</p>
          <p className="link hidden lg:inline-flex">History</p>
          <p className="link hidden xl:inline-flex">Supermarket</p>
          <p className="link hidden xl:inline-flex">Fashion</p>
          <p className="link hidden lg:inline-flex">Sell</p>
          <p className="link hidden lg:inline-flex">Help</p>
        </div>
      </div>

      <div className="hidden lg:flex lg:col-span-1 lg:row-start-1 lg:col-start-3 lg:row-span-1 justify-center">
        <h4 className="text-mercadolibre-blue">
          Up to 4 months of Disney+ free
        </h4>
      </div>
    </header>
  );
};

export default Header;
