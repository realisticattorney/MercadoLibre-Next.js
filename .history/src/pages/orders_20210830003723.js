import moment from 'moment';
import { useSession } from 'next-auth/client';
import db from '../../firebase';
import Header from '../components/Header';

const Orders = () => {
  const [session] = useSession();

  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 bg-blue-400">Your Orders</h1>

        {session ? (
          <h2>x orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        <div className="mt-5 space-y-4"></div>
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
       items: (await stripe.checkout.sessions.listLineItems(order.id, 

})) 

  return {
    props: {
      session,
      orders
    },
  };
}
