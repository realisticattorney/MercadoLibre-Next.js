import {
  CogIcon,
  HeartIcon,
  HomeIcon,
  KeyIcon,
  MenuIcon,
  OfficeBuildingIcon,
  ShoppingBagIcon,
  TicketIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';
import moment from 'moment';
import { getSession, useSession } from 'next-auth/client';
import { useState } from 'react';
import db from '../../firebase';
import Header from '../components/Header';
import Order from '../components/Order';

const Orders = ({ orders }) => {
  const [session] = useSession();
  console.log(orders);

  const [activeMenu, setActiveMenu] = useState('');

  return (
    <div className=" bg-gray-200 min-h-screen h-full overflow-hidden">
      <Header />
      <main className="relative flex mx-auto overscroll-y-none">
        <div className="flex-col bg-gray-100 absolute left-0 h-full transform">
          <div className="py-10 pl-4 pr-5 border-l-4 border-transparent text-blue-600">
            <MenuIcon className="h-6" />
          </div>
          <div className="py-4 pl-4 pr-5 transition ease-in-out cursor-pointer border-l-4 border-transparent hover:border-blue-500 text-gray-400">
            <HeartIcon className="h-6 heroicon-sw-1.5" />
          </div>
          <div className="py-4 pl-4 pr-5 transition ease-in-out cursor-pointer border-l-4 border-transparent hover:border-blue-500 text-gray-400">
            <TicketIcon className="h-6 heroicon-sw-1.2" />
          </div>
          <div className="py-4 pl-4 pr-5 transition ease-in-out cursor-pointer border-l-4 border-transparent hover:border-blue-500 text-blue-600">
            <ShoppingBagIcon className="h-6 heroicon-sw-1.2" />
          </div>
          <div className="py-4 pl-4 pr-5 transition ease-in-out cursor-pointer border-l-4 border-transparent hover:border-blue-500 text-gray-400">
            <OfficeBuildingIcon className="h-6 heroicon-sw-1.2" />
          </div>
          <div className="py-4 pl-4 pr-5 transition ease-in-out cursor-pointer border-l-4 border-transparent hover:border-blue-500 text-gray-400">
            <HomeIcon className="h-6 heroicon-sw-1.2" />
          </div>
          <div className="py-4 pl-4 pr-5 transition ease-in-out cursor-pointer border-l-4 border-transparent hover:border-blue-500 text-gray-400">
            <CogIcon className="h-6 heroicon-sw-1.2" />
          </div>
        </div>

        {/* right-side */}
        <div className=" flex-grow p-10 mx-auto ml-16 justify-center">
          <h1 className="text-3xl text-gray-800 border-b mb-2 pb-1">Orders</h1>

          {session ? (
            <h2 className="text-gray-400 font-medium">
              {orders.length} orders
            </h2>
          ) : (
            <h2>Please sign in to see your orders</h2>
          )}

          <div className="mt-5 space-y-4 mx-auto">
            {orders?.map((order) => (
              <Order order={order} key={order.id} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Orders;

//we're going to have the orders pre-rendered by the time the user gets to the page. I need to have access to stripe and the user's authenticate state/session
//anything inside the getserversideprops is basically nodeJs
export async function getServerSideProps(context) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  //rather than the useSession, in the server we use getSession
  const session = await getSession(context);

  //if no session, we end it here
  if (!session) {
    return { props: {} };
  }

  //get the user's orders from firebase
  const stripeOrders = await db
    .collection('users')
    .doc(session.user.email)
    .collection('orders')
    .orderBy('timestamp', 'desc')
    .get();

  //stripe orders is an array of objects, we need to convert it to an array of objects
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, { limit: 100 })
      ).data,
    }))
  );

  return {
    props: {
      orders,
    },
  };
}
