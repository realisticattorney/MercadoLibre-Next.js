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

          <div className="flex flex-col bg-white p-10 mb-5 border-b text-right items-end">
            {items.length > 0 && (
              <>
                <h2 className="whitespace-nowrap mb-5 text-3xl font-regular text-gray-700">
                {' '}
                    Total:
                  <span className="ml-5">
                    {' '}
                    {' $'}
                    {items.reduce((acc, b) => {
                      return acc + parseFloat(b.price);
                    }, 0)}
                  </span>
                </h2>
                
                <div className="mt-5">
                  <button
                    role="link"
                    onClick={createCheckoutSession}
                    disabled={!session}
                    className={`button text-white rounded-md max-w-xs text-lg mt-2 ${
                      !session &&
                      `from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed active:bg-red-600-500 active:bg-red-700`
                    }`}
                  >
                    {session ? 'Proceed to checkout' : 'Sign in to checkout'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right section*/}
      </main>
    </div>
  );
};

export default Checkout;
