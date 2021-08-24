import Image from 'next/image';
import {
  MenuIcon,
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
      <div className="px-1 flex items-center bg-amazon_blue flex-grow">
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
        <div className="hidden sm:flex items-center h-7 rounded-sm flex-grow bg-white cursor-pointer shadow-md">
          <SearchIcon className="h-6 p-1 pl-2 text-gray-400 active:mt-1" />
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-1 text-sm text-gray-600 placeholder-gray-300"
            type="text"
            placeholder="Search products, brands and more..."
          />
        </div>
        {/*right - */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
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

          <div className="relative link flex items-center ">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>

            <ShoppingCartIcon
              onClick={() => router.push('/checkout')}
              className="h-7 font- text-amazon_blue-light"
            />
            {/* <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p> */}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
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
    </header>
  );
};

export default Header;
