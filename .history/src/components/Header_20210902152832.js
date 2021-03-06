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
import SvgIcon from '@material-ui/core/SvgIcon';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [session] = useSession();

  const router = useRouter();

  const items = useSelector(selectItems);
  const lala = 'ShoppingBagIcon';
  const mainMenuItems = [
    ['Start', HomeIcon],
    ['Notifications', BellIcon],
    ['My Orders', ShoppingBagIcon],
    ['Favorites', HeartIcon],
    ['My account', UserCircleIcon],
    ['Deals', TagIcon],
    ['Movies & TV Shows', PlayIcon],
    ['History', ClockIcon],
    ['Sell', ReceiptTaxIcon],
    ['Supermarket', ShoppingCartIcon],
    ['Fashion', ShoppingBagIcon],
    ['Official Stores', OfficeBuildingIcon],
    ['Categories', ViewGridIcon],
    ['Help', QuestionMarkCircleIcon],
    ['Buy and sell using our app!', DownloadIcon],
  ];

  const otherMenuItems = [
    ['Home & Furniture', 'MLA1574'],
    ['Home Appliances', 'MLA11830'],
    ['Tools', 'MLA417282'],
    ['Building Materials', 'MLA5228'],
    ['Fitness & Sports', 'MLA1276'],
    ['Cars Accesories', 'MLA1747'],
    ['Fashion', 'MLA3114'],
    ['Toys', 'MLA1132'],
    ['Baby & Kids', 'MLA1455'],
    ['Beauty & Personal Care', 'MLA1253'],
    ['Health Equipments', 'MLA409431'],
    ['Office & School Supplies', 'MLA1499'],
    ['Services', 'MLA1540'],
    ['Sustainable Living', 'MLA417006'],
  ];

  const userMenuItems = [
    ['Orders', 'orders'],
    ['Questions', 'orders'],
    ['Mercado-Credit', 'orders'],
    ['Movies & TV Shows', 'MLA1000'],
    ['Sell', 'orders'],
    ['My account', 'orders'],
    ['New releases', 'MLA1039'],
    ['Publications', 'orders'],
    ['Sold items', 'orders'],
    ['Billing', 'orders'],
    ['My personal information', 'orders'],
    ['Security', 'orders'],
    ['Privacy', 'orders'],
    ['Log out', 'logout'],
  ];

  return (
    <header className="lg:grid lg:grid-flow-col lg:grid-rows-2 bg-mercadolibre items-center lg:pl-3 lg:pt-1">
      <div className="pl-2 flex items-center bg-mercadolibre flex-grow py-1 border-b border-gray-400 border-opacity-30 lg:contents ">
        {/*Left - Logo */}
        <div
          className="flex items-center cursor-pointer lg:col-span-1 lg:row-start-1 lg:col-start-1 lg:row-span-1 mr-3"
          onClick={() => router.push('/')}
        >
          <div className="relative w-12 h-9 lg:hidden">
            <Image
              src="/images/logo.jpg"
              layout="fill"
              className="cursor-pointer lg:hidden"
              quality={100}
            />
          </div>
          <div className="relative w-36 h-9 hidden lg:block">
            <Image
              src="/images/logo_large.png"
              layout="fill"
              className="hidden md:block cursor-pointer"
            />
          </div>
          {/* <div className="hidden lg:block">
            <h2 className=" text-xl text-mercadolibre-blue line-clamp-2 font-black opacity-95">
              mercado <span className="line-clamp-2 -mt-2.5">libre</span>
            </h2> */}
          {/* </div> */}
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
                              className="group flex items-center text-base  text-gray-900 heroicon-sw-1.2  font-semibold"
                            >
                              Level 5 - Advanced {'>'}
                            </a>{' '}
                          </>
                        ) : (
                          <>
                            <p
                              href="#"
                              className="group flex items-center text-base  text-gray-900 heroicon-sw-1.2  font-semibold"
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
                      {mainMenuItems.map((item, index) => (
                        <Menu.Item
                          className={`${
                            index === 8 || index === 12 || index === 13
                              ? 'border-b border-gray-200 pb-6'
                              : ''
                          }`}
                        >
                          <div>
                            <a
                              href="#"
                              className="flex items-center text-sm text-gray-900 font-medium"
                            >
                              <SvgIcon
                                component={item[1]}
                                className={`${classes.root} mr-3 h-6 w-6 text-gray-900 heroicon-sw-1.2`}
                                aria-hidden="true"
                                style={{ fill: grey[50] }}
                              />
                              {item[0]}
                            </a>
                          </div>
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                )}
              </>
            )}
          </Menu>
          <div
            className="relative link flex items-center "
            onClick={() => router.push('/checkout')}
          >
            <span className="absolute top-0 right-1.5   h-3 w-3.5 font-light bg-mercadolibre text-center rounded-full text-black text-xs">
              {items.length}
            </span>

            <ShoppingCartIcon className="h-7 font-thin text-mercadolibre-blue heroicon-sw-0.8" />
          </div>
          <button className="link flex items-center mx-2  focus:outline-none">
            <BellIcon className="hidden h-6  text-mercadolibre-blue lg:inline-flex heroicon-sw-1 mr-1" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-3 py-2 pl-2 bg-mercadolibre text-sm lg:contents">
        <div className="lg:col-span-1 lg:row-start-2 lg:col-start-1 lg:row-span-1">
          <button className="link flex items-center text-mercadolibre-blue no-underline focus:outline-none">
            <LocationMarkerIcon className="h-4 lg:h-7 mr-1 text-mercadolibre-blue heroicon-sw-1" />
            <span className="text-xs font-light text-left items-center">
              Deliver to{' '}
              <span className="lg:line-clamp-2 lg:text-sm -mt-1">
                Anywhere{' '}
              </span>
            </span>
          </button>
        </div>

        <div className="flex lg:col-span-1 lg:row-start-2 lg:col-start-3 lg:row-span-1  items-center justify-end">
          <div className="hidden lg:flex items-center mr-20 space-x-3">
            {session && (
              <Menu as="div" className="relative">
                <Menu.Button className="flex cursor-pointer items-center focus:outline-none">
                  <UserCircleIcon className="h-6 mr-1 text-mercadolibre-blue heroicon-sw-1" />
                  <p>
                    {session ? `${session.user.name.split(' ')[1]}` : 'Sign in'}
                  </p>
                  <ChevronDownIcon className="h-3.5 text-gray-500 text-opacity-50" />
                </Menu.Button>
                <Menu.Items className="origin-top absolute -right-10 mt-2.5 w-72 rounded-b-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 py-3 divide-y">
                  <Menu.Item className="flex flex-nowrap px-4 py-1 items-center">
                    <div className="">
                      <UserIcon className="h-12 border-4 rounded-full p-2 border-indigo-600 text-gray-600" />
                      <div className="flex-col group flex justify-center px-3 py-2 text-sm ">
                        {session ? (
                          <>
                            <p className="text-gray-500 text-sm -mb-1">
                              Hi {session.user.name.split(' ')[0]}
                            </p>
                            <a
                              href="#"
                              className="group flex items-center text-base  text-gray-900 heroicon-sw-1.2  font-semibold"
                            >
                              Level 5 - Advanced {'>'}
                            </a>{' '}
                          </>
                        ) : (
                          <>
                            <p
                              href="#"
                              className="group flex items-center text-base  text-gray-900 heroicon-sw-1.2  font-semibold"
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
                  </Menu.Item>
                  {userMenuItems.map((item, index) => (
                    <Menu.Item
                      className={`${
                        index === 2 ||
                        index === 4 ||
                        index === 10 ||
                        index === 13
                          ? ''
                          : 'border-0 border-white'
                      }`}
                    >
                      <div>
                        {index === 4 || index === 7 ? (
                          <a
                            href="#"
                            className="flex py-4 items-center text-sm text-gray-700 font-medium hover:bg-blue-500 hover:text-white pl-6"
                            onClick={() => router.push(`/products/${item[1]}`)}
                          >
                            {item[0]}
                          </a>
                        ) : index === 13 ? (
                          <a
                            href="#"
                            className="flex py-4 items-center text-sm text-gray-700 font-medium hover:bg-blue-500 hover:text-white pl-6"
                            onClick={signOut}
                          >
                            {item[0]}
                          </a>
                        ) : (
                          <a
                            href="#"
                            className="flex py-4 items-center text-sm text-gray-700 font-medium hover:bg-blue-500 hover:text-white pl-6"
                            onClick={() => router.push('/orders')}
                          >
                            {item[0]}
                          </a>
                        )}
                      </div>
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Menu>
            )}
            <div className="cursor-pointer">
              {session ? (
                <p onClick={() => router.push('/orders')}>My orders</p>
              ) : (
                <p onClick={signIn}>Login</p>
              )}
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
            <Menu.Button className="flex items-center focus:outline-none no-underline">
              <p className="link hidden lg:inline-flex cursor-pointer focus:outline-none no-underline ">
                Categories
              </p>
              <ChevronDownIcon className="h-3.5 text-gray-500 text-opacity-50 no-underline" />
            </Menu.Button>
            <Menu.Items className="origin-top absolute -right-10 mt-3 w-60 rounded-l-md shadow-lg bg-mercadolibre-gray ring-1 ring-black ring-opacity-5 focus:outline-none z-50 py-3">
              <Menu.Item className="">
                <>
                  <a
                    onClick={() => router.replace(`/products/MLA48890`)}
                    className="group flex py-3 items-center text-sm text-white font-medium hover:bg-blue-500 hover:text-white pl-8"
                  >
                    Motors
                  </a>
                  <a
                    onClick={() => router.replace(`/products/MLA401685`)}
                    className="group flex py-3 pl-8 items-center text-sm text-white font-medium hover:bg-blue-500 hover:text-white"
                  >
                    Real State
                  </a>
                  <Menu as="div" className="relative w-[700px]">
                    <Menu.Button
                      href="#"
                      className="group flex py-3 pl-8 pr-5 w-60  items-center text-sm text-white font-medium hover:bg-blue-500 hover:text-white focus:outline-none justify-between"
                    >
                      Electronics
                      <ChevronRightIcon className="h-5 items-center text-gray-100 text-opacity-50 no-underline" />
                    </Menu.Button>
                    <Menu.Items className="absolute mt-3 w-full left-60 -top-28 h-[772px] rounded-r-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-51 ">
                      <Menu.Item className="p-8">
                        <div className="flex flex-col w-full">
                          <div className="border-b border-gray-200 pb-2">
                            <h2
                              className="text-xl font-medium hover:text-blue-600 cursor-pointer"
                              onClick={() =>
                                router.replace(`/products/MLA1000`)
                              }
                            >
                              Electronics
                            </h2>
                          </div>
                          <div className="grid grid-cols-3 grid-rows-2 mt-5">
                            <div className="space-y-2">
                              <p className="font-medium hover:text-blue-600 cursor-pointer">
                                Smartphones & Phones
                              </p>
                              <p className="hover:text-blue-600 cursor-pointer">
                                Smarthphones
                              </p>
                              <p className="hover:text-blue-600 cursor-pointer">
                                Accessories for smartphones
                              </p>
                            </div>
                            <div className="space-y-2">
                              <p className="font-medium hover:text-blue-600 cursor-pointer">
                                Cameras & Accessories
                              </p>
                              <p className="hover:text-blue-600 cursor-pointer">
                                Digital Cameras
                              </p>
                              <p className="hover:text-blue-600 cursor-pointer">
                                Accessories for cameras
                              </p>
                            </div>
                            <div className="space-y-2">
                              <p className="font-medium hover:text-blue-600 cursor-pointer">
                                Videogame Consoles
                              </p>
                              <p className="hover:text-blue-600 cursor-pointer">
                                Videogames
                              </p>
                              <p className="hover:text-blue-600 cursor-pointer">
                                For PS5
                              </p>
                            </div>
                            <div className="space-y-2">
                              <p className="font-medium hover:text-blue-600 cursor-pointer">
                                Computers
                              </p>
                              <p className="hover:text-blue-600 cursor-pointer">
                                Components
                              </p>
                              <p className="hover:text-blue-600 cursor-pointer">
                                Prints
                              </p>
                              <p className="hover:text-blue-600 cursor-pointer">
                                Tablets & Pads
                              </p>
                              <p className="hover:text-blue-600 cursor-pointer">
                                PC
                              </p>
                            </div>
                            <div className="space-y-2">
                              <p className="font-medium hover:text-blue-600 cursor-pointer">
                                Audio & Video
                              </p>
                              <p className="hover:text-blue-600 cursor-pointer">
                                Audio
                              </p>
                              <p className="hover:text-blue-600 cursor-pointer">
                                Accessories for Audio & Video
                              </p>
                              <p className="hover:text-blue-600 cursor-pointer">
                                Drones & Accessories
                              </p>
                            </div>
                            <div className="space-y-2">
                              <p className="font-medium hover:text-blue-600 cursor-pointer">
                                TVs
                              </p>
                            </div>
                          </div>
                        </div>
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>

                  {otherMenuItems.map((item) => (
                    <a
                      onClick={() => router.replace(`/products/${item[1]}`)}
                      className="group flex py-3 pl-8 cursor-pointer items-center text-sm text-white font-medium hover:bg-blue-500 hover:text-white"
                    >
                      {item[0]}
                    </a>
                  ))}
                </>
              </Menu.Item>
            </Menu.Items>
          </Menu>
          <div className="cursor-pointer no-underline ">
            <p
              className="link hidden lg:inline-flex focus:no-underline"
              onClick={() => router.replace(`/products/MLA1039`)}
            >
              Offers
            </p>
          </div>
          <p className="link hidden lg:inline-flex">History</p>
          <p
            className="link hidden xl:inline-flex"
            onClick={() => router.replace(`/products/MLA1423`)}
          >
            Supermarket
          </p>
          <p
            className="link hidden xl:inline-flex"
            onClick={() => router.replace(`/products/MLA3114`)}
          >
            Fashion
          </p>
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
