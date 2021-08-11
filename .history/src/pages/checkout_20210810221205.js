import Image from 'next/image';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';

//border-b for a thin line already styled

const checkout = () => {
  const items = useSelector(selectItems);

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left section*/}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? 'Your Amazon Basket is empty'
                : 'Shopping Basket'}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct product={item} key={i} />
            ))}
          </div>
        </div>

        {/* Right section*/}
        <div>
          {items.length > 0 && (
            <>
              <div className="flex flex-col p-5 space-y-10 bg-white">
                <h2 className="text-3xl border-b pb-4">
                  Subtotal:{' '}
                  {items.length === 1 ? '1 item' : items.length + ' items'}
                  <span>
                    {items.reduce((a, b) => {
                      return parseFloat(a.price) + parseInt(b.price);
                    })}
                  </span>
                </h2>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default checkout;
