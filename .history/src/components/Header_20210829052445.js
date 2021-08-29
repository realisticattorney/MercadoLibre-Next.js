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
  XIcon,
  UserIcon,
  HomeIcon,
  ShoppingBagIcon,
  HeartIcon,
  PlayIcon,
  ClockIcon,
  TagIcon,
  DownloadIcon,
  ReceiptTaxIcon,
  OfficeBuildingIcon,
  ViewGridIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
import { Menu } from '@headlessui/react';
import { useRef, useState } from 'react';

//onClick a div...bro
//next.js Image component compress your image making it smaller w/o losing quality
//click on the component to go to the file of the component

const Header = () => {
  //lets check our session
  const [session] = useSession();

  const router = useRouter();

  const items = useSelector(selectItems);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function isOpenHandler(e) {
    e.preventDefault();
    console.log(e);
    setIsMenuOpen(!isMenuOpen);
  }

  // const ariaRef = useRef(null);

  return (
    <header className="lg:grid lg:grid-flow-col lg:grid-rows-2 bg-mercadolibre items-center lg:pl-3 lg:pt-1">
      <div className="pl-2 flex items-center bg-mercadolibre flex-grow py-1 border-b border-gray-400 border-opacity-30 lg:contents ">
        {/*Left - Logo */}
        <div
          className="flex items-center cursor-pointer lg:col-span-1 lg:row-start-1 lg:col-start-1 lg:row-span-1 mr-3"
          onClick={() => router.push('/')}
        >
          <div className="relative w-12 h-9">
            <Image
              src="/images/logo.jpg"
              layout="fill"
              className="cursor-pointer"
            />
          </div>
          <div className="hidden lg:block">
            <h2 className=" text-xl text-mercadolibre-blue line-clamp-2 font-extrabold opacity-95">
              mercado <span className="line-clamp-2 -mt-2.5">libre</span>
            </h2>
          </div>
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
        <div className="text-mercadolibre-blue flex items-center text-xs whitespace-nowrap lg:col-span-1 lg:row-start-2 lg:col-start-3 lg:row-span-1 lg:flex-row-reverse">
          <Menu as="div">
            {({ open }) => (
              <>
                <Menu.Button className="link flex items-center mx-2">
                  {open ? (
                    <XIcon
                      className="h-6 text-mercadolibre-blue lg:hidden heroicon-sw-0.8"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="h-6 text-mercadolibre-blue lg:hidden heroicon-sw-0.8"
                      aria-hidden="true"
                    />
                  )}
                </Menu.Button>

                {open && (
                  <Menu.Items className="origin-top absolute right-0 mt-3 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50">
                    <div className="flex px-4 py-2 items-center">
                      <UserIcon className="h-12 border-4 rounded-full p-2 border-indigo-600 text-gray-600" />
                      <div className="flex-col group flex justify-center px-4 py-2 text-sm ">
                        {session ? (
                          <>
                            <p className="text-gray-500 text-sm -mb-1">
                              Hi {session.user.name.split(' ')[0]}
                            </p>
                            <a
                              href="#"
                              className="group flex items-center text-base  text-gray-900 heroicon-sw-1.2 hover:bg-indigo-500 hover:text-white font-semibold"
                            >
                              Level 5 - Advanced {'>'}
                            </a>{' '}
                          </>
                        ) : (
                          <>
                            <p
                              href="#"
                              className="group flex items-center text-base  text-gray-900 heroicon-sw-1.2 hover:bg-indigo-500 hover:text-white font-semibold"
                            >
                              Welcome
                            </p>

                            <p className="text-gray-500 text-sm -mb-1">
                              {' '}
                              Sign in to see your orders, cart, and more
                            </p>
                            <button className="button text-white rounded-md my-3">
                              Login
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="p-6 space-y-6">
                      <Menu.Item>
                        <a
                          href="#"
                          className="group flex items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                        >
                          <HomeIcon
                            className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                            aria-hidden="true"
                          />
                          Start
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="#"
                          className="group flex items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                        >
                          <BellIcon
                            className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                            aria-hidden="true"
                          />
                          Notifications
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="#"
                          className="group flex items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                        >
                          <ShoppingBagIcon
                            className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                            aria-hidden="true"
                          />
                          My Orders
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="#"
                          className="group flex items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                        >
                          <HeartIcon
                            className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                            aria-hidden="true"
                          />
                          Favorites
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="#"
                          className="group flex items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                        >
                          <UserIcon
                            className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                            aria-hidden="true"
                          />
                          My account
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="#"
                          className="group flex items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                        >
                          <ReceiptTaxIcon
                            className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                            aria-hidden="true"
                          />
                          Deals
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="#"
                          className="group flex items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                        >
                          <PlayIcon
                            className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                            aria-hidden="true"
                          />
                          Movies & TV Shows
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="#"
                          className="group flex items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                        >
                          <ClockIcon
                            className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                            aria-hidden="true"
                          />
                          History
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="#"
                          className="group flex items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                        >
                          <TagIcon
                            className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                            aria-hidden="true"
                          />
                          Sell
                        </a>
                      </Menu.Item>
                    </div>
                    <div className="p-6 space-y-6">
                      <Menu.Item>
                        <a
                          href="#"
                          className="group flex items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                        >
                          <ShoppingCartIcon
                            className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                            aria-hidden="true"
                          />
                          Supermarket
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="#"
                          className="group flex items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                        >
                          <ShoppingBagIcon
                            className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                            aria-hidden="true"
                          />
                          Fashion
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="#"
                          className="group flex items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                        >
                          <OfficeBuildingIcon
                            className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                            aria-hidden="true"
                          />
                          Official Stores
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="#"
                          className="group flex items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                        >
                          <ViewGridIcon
                            className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                            aria-hidden="true"
                          />
                          Categories
                        </a>
                      </Menu.Item>
                    </div>
                    <div className="p-6">
                      <Menu.Item>
                        <a
                          href="#"
                          className="group flex items-center  text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                        >
                          <QuestionMarkCircleIcon
                            className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                            aria-hidden="true"
                          />
                          Help
                        </a>
                      </Menu.Item>
                    </div>
                    <div className="p-6">
                      <Menu.Item>
                        <a
                          href="#"
                          className="group flex items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                        >
                          <DownloadIcon
                            className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                            aria-hidden="true"
                          />
                          Buy and sell using our app!
                        </a>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                )}
              </>
            )}
          </Menu>
          <div className="relative link flex items-center ">
            <span className="absolute top-0 right-1.5  h-3 w-3.5 font-light bg-mercadolibre text-center rounded-full text-black text-xs">
              {items.length}
            </span>

            <ShoppingCartIcon
              onClick={() => router.push('/checkout')}
              className="h-7 font-thin text-mercadolibre-blue heroicon-sw-0.8"
            />
          </div>
          <button className="link flex items-center mx-2">
            <BellIcon className="hidden h-6  text-mercadolibre-blue lg:inline-flex heroicon-sw-1 mr-1" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-3 py-2 pl-2 bg-mercadolibre text-sm lg:contents">
        <div className="lg:col-span-1 lg:row-start-2 lg:col-start-1 lg:row-span-1">
          <button className="link flex items-center text-mercadolibre-blue no-underline">
            <LocationMarkerIcon className="h-4 lg:h-7 mr-1 text-mercadolibre-blue heroicon-sw-1" />
            <span className="text-xs font-light text-left">
              Deliver to{' '}
              <span className="lg:line-clamp-2 lg:text-sm -mt-1">
                Analia Santa Fe 3388
              </span>
            </span>
          </button>
        </div>

        <div className="flex lg:col-span-1 lg:row-start-2 lg:col-start-3 lg:row-span-1  items-center justify-end">
          <div className="hidden lg:flex items-center mr-20 space-x-3">
            <div
              className="flex cursor-pointer items-center"
              onClick={session ? signOut : signIn}
            >
              <UserCircleIcon className="h-6 mr-1 text-mercadolibre-blue heroicon-sw-1" />
              <p>
                {session ? `${session.user.name.split(' ')[1]}` : 'Sign in'}
              </p>
              <ChevronDownIcon className="h-3.5 text-gray-500 text-opacity-50" />
            </div>
            <div className="cursor-pointer">
              <p>{session ? `My orders` : 'Login'}</p>
            </div>
            <div className="flex cursor-pointer  items-center pr-3">
              <p>{session ? `Favorites` : 'My orders'}</p>
              <ChevronDownIcon className="h-3.5 text-gray-500 text-opacity-50" />
            </div>
          </div>
          <button
            className="link flex items-center 
        text-mercadolibre-blue no-underline  lg:hidden"
          >
            <ChevronRightIcon className="h-4 mr-1 text-gray-500 text-opacity-50" />
          </button>
        </div>
        <div className="lg:col-span-1 lg:row-start-2 lg:col-start-2 lg:row-span-1 hidden lg:flex space-x-4 text-gray-600 font-light">
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center">
              <p className="link hidden lg:inline-flex">Categories</p>
              <ChevronDownIcon className="h-3 text-gray-500 text-opacity-50" />
            </Menu.Button>
            <Menu.Items className="origin-top-right absolute right-0 mt-3 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 py-3 px-20 ">
              <Menu.Item className="">
                <>
                  <a
                    href="#"
                    className="group flex py-3 items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                  >
                    <OfficeBuildingIcon
                      className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                      aria-hidden="true"
                    />
                    Official Stores
                  </a>
                  <a
                    href="#"
                    className="group flex py-3 items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                  >
                    <OfficeBuildingIcon
                      className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                      aria-hidden="true"
                    />
                    Official Stores
                  </a>
                  <a
                    href="#"
                    className="group flex py-3 items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                  >
                    <OfficeBuildingIcon
                      className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                      aria-hidden="true"
                    />
                    Official Stores
                  </a>
                  <a
                    href="#"
                    className="group flex py-3 items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                  >
                    <OfficeBuildingIcon
                      className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                      aria-hidden="true"
                    />
                    Official Stores
                  </a>
                  <a
                    href="#"
                    className="group flex py-3 items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                  >
                    <OfficeBuildingIcon
                      className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                      aria-hidden="true"
                    />
                    Official Stores
                  </a>
                  <a
                    href="#"
                    className="group flex py-3 items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                  >
                    <OfficeBuildingIcon
                      className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                      aria-hidden="true"
                    />
                    Official Stores
                  </a>
                  <a
                    href="#"
                    className="group flex py-3 items-center text-sm text-gray-900 font-medium hover:bg-indigo-500 hover:text-white"
                  >
                    <OfficeBuildingIcon
                      className="mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2  group-hover:text-white"
                      aria-hidden="true"
                    />
                    Official Stores
                  </a>
                </>
              </Menu.Item>
            </Menu.Items>
          </Menu>
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
