import Header from '../components/Header';
import { useSession } from 'next-auth/client';
import db from '../../firebase';

const Orders = ({orders}) => {
  const [session] = useSession();

  
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <div className="flex flex-col bg-white">
          <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
            Your Orders
          </h1>
          {session ? (
             <h2>x order</h2>
          ) : (
             <h2>Please sign in to ...</h2>
          )}
          <div className="border ">{}</div>
        </div>
      </main>
    </div>
  );
};

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  //Get the user's credentials
  const session = getSession(context);

  if(!session) {
    return {
       props: {}
    };
  }

  //this is basically a really specific GET request to the Firebase Database
  const stripeOrders = await db.collection('users').doc(session.user.email.collection('orders').orderBy('timestamp', 'desc').get());

  // Stripe orders
  const orders = await Promise.all(stripeOrders.docs.map(async order => ({
     id: order.id,
     amount: order.data().amount,
     amountShipping: order.data().amount_shipping,
     images: order.data().images,
     timestamp: moment(order.data().timestamp.toDate()).unix(),
     items: (
       await stripe.checkout.sessions.listLineItems(orders.id, {
         limit: 100,
     })).data,
})))

  return {
    props: {
      orders,
    },
  };


}
