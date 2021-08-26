import Image from 'next/image';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
import { useSession } from 'next-auth/client';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
//border-b for a thin line already styled
const stripePromise = loadStripe(process.env.stripe_public_key);

const Checkout = () => {
  const items = useSelector(selectItems);

  const [session] = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // Create a checkout session
    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items: items,
      email: session.user.email,
    });

    // Redirect to the checkout session
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <div className="bg-gray-100">
      <Header />

      <main className=" max-w-screen-2xl mx-auto">
        {/* Left section*/}
        <div className="flex-grow m-5 shadow-sm">
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? 'Your Basket is empty' : 'Shopping Basket'}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct product={item} key={i} />
            ))}
          </div>


        </div>

        {/* Right section*/}
       
      </main>
    </div>
  );
};

export default Checkout;
