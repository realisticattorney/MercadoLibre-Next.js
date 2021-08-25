import Image from 'next/image';
import { useRouter } from 'next/router';
//line-clamp to interrupt text once it gets too long
//focus:ring-0 to remove the focus
const Category = ({ category }) => {
  const { id, name, src } = category;

  const router = useRouter();

  return id === 3 ||
    id === 4 ||
    id === 5 ||
    id === 6 ||
    id === 13 ||
    id === 16 ? (
    <div
      className="col-span-full lg:col-span-2 relative flex flex-col m-2 bg-white z-30 p-5 hover:shadow-2xl shadow-lg rounded-sm md:rounded-md transform transition-shadow h-56 cursor-pointer"
      onClick={() => router.replace(`/products/${id}`)}
    >
      <Image
        src={src}
        layout="fill"
        objectFit="cover"
        className="rounded-sm md:rounded-md"
      />
      <div className="absolute bottom-4 left-4 bg-gray-50 rounded-md p-3.5 text-xs text-gray-700 uppercase">
        <h4>up to</h4>
        <span className="font-bold text-2xl">30% OFF</span>
        <h4>{name}</h4>
        <p className="capitalize texbl6">See offers</p>
      </div>
    </div>
  ) : id === 9 || id === 10 ? (
    <div className="lg:col-span-3 col-span-full relative flex flex-col m-2 bg-white z-30 p-5 hover:shadow-2xl shadow-lg rounded-sm md:rounded-md transform transition-shadow h-36">
      <Image
        src={src}
        layout="fill"
        objectFit="cover"
        className="rounded-sm md:rounded-md"
      />
      <div className="text-center text-xs text-gray-700 uppercase">
        <h4 className="mt-3">up to</h4>
        <span className="font-bold text-lg">30% OFF</span>
        <h4>{name}</h4>
      </div>
    </div>
  ) : (
    <div className="relative flex flex-col m-2 bg-white z-30 p-5 hover:shadow-2xl shadow-lg rounded-md transform transition-shadow ">
      <Image src={src} height={112} width={115} objectFit="contain" />
      <div className="text-center text-xs text-gray-700 uppercase">
        <h4 className="mt-3">up to</h4>
        <span className="font-bold text-xl">30% OFF</span>
        <h4>{name}</h4>
      </div>
    </div>
  );
};
export default Category;
