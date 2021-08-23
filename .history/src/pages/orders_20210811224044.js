import Header from '../components/Header';
import { useSession } from 'next-auth/client';

const Orders = () => {
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

  const stripeOrder
}
