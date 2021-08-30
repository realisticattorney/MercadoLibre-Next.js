import { CheckCircleIcon } from '@heroicons/react/solid';
import Header from '../components/Header';

const success = () => {
  return (
    <div className="bg-green-100 h-screen ">
      <Header />

      <main className="max-w-screen-lg mx-auto">
            <div>
               <div>
                  <CheckCircleIcon className="text-green-500 h-10" />
                  <h1>Thank you. Your order has been confirmed!</h1>
               </div>
            </div>

      </main>
      
    </div>
  );
};

export default success;
