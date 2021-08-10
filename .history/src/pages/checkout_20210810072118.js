import Image from 'next/image';
import Header from "../components/Header";

const checkout = () => {
  return (
    <div className="bg-gray-100">
      <Header/>

      <main className="lg:flex max-w-screen-2xl mx-auto">
         {/* Left section*/}
         <div>
            <Image 
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            />
         </div>
         
         
         {/* Right section*/}
         <div>


         </div>
      </main>
    </div>
  );
};

export default checkout;
