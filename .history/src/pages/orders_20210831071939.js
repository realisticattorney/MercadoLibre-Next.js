import { HeartIcon } from '@heroicons/react/outline';
import moment from 'moment';
import { getSession, useSession } from 'next-auth/client';
import db from '../../firebase';
import Header from '../components/Header';
import Order from '../components/Order';

const Orders = ({ orders }) => {
  const [session] = useSession();
  console.log(orders);
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10 flex">
      <div className="flex-col ">
        <div>
        <HeartIcon className="h-5"/>
        </div>
        <div>
        <HeartIcon className="h-5"/>
        </div>
        <div>
        <HeartIcon className="h-5"/>
        </div>
        <div>
        <HeartIcon className="h-5"/>
        </div>
        <div>
        <HeartIcon className="h-5"/>
        </div>
        <div>
        <HeartIcon className="h-5"/>
        </div>
      </div>
        <h1 className="text-3xl border-b mb-2 pb-1 bg-blue-400">Your Orders</h1>

        {session ? (
          <h2>{orders.length} Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        {/* <div className="mt-5 space-y-4">
          {orders?.map((order) => (
            <Order order={order} key={order.id} />
          ))}
        </div> */}
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
