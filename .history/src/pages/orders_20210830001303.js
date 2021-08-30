import { useSession } from 'next-auth/client';
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

//we're going to have the orders pre-rendered by the time the user gets to 

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}