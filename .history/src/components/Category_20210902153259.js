import Image from 'next/image';
import { useRouter } from 'next/router';
//line-clamp to interrupt text once it gets too long
//focus:ring-0 to remove the focus
const Category = ({ category }) => {
  const { id, name, src } = category;

  const router = useRouter();

  return id === 'MLA1574' ||
    id === 'MLA11830' ||
    id === 'MLA73986' ||
    id === 'MLA1000' ||
    id === 'MLA3114' ||
    id === 'MLA1144' ? (
    <div
      className="col-span-full lg:col-span-2 relative flex flex-col m-2 bg-white z-30 p-5 hover:shadow-2xl shadow-lg rounded-sm md:rounded-md transform transition-shadow h-56 cursor-pointer"
      onClick={() => router.push(`/products/${id}`)}
    >
      <Image
        src={src}
        layout="fill"
        objectFit="cover"
        className="rounded-sm md:rounded-md"
        quality={100}
      />
      <div className="absolute bottom-4 left-4 bg-gray-50 rounded-md p-3.5 text-xs text-gray-700 uppercase">
        <h4>up to</h4>
        <span className="font-bold text-2xl">30% OFF</span>
        <h4>{name}</h4>
        <p className="hidden lg:inline-flex capitalize text-blue-500 font-medium mt-2 hover:text-blue-400">
          See offers
        </p>
      </div>
    </div>
  ) : id === 'MLA1039' || id === 'MLA1648' ? (
    <div
      className="lg:col-span-3 col-span-full relative flex flex-col m-2 bg-white z-30 p-5 hover:shadow-2xl shadow-lg rounded-sm md:rounded-md transform transition-shadow h-36 cursor-pointer"
      onClick={() => router.replace(`/products/${id}`)}
    >
      <Image
        src={src}
        layout="fill"
        objectFit="cover"
        className="rounded-sm md:rounded-md"
        quality={100}
      />
      <div className="text-center text-xs text-gray-700 uppercase">
        <h4 className="mt-3">up to</h4>
        <span className="font-bold text-lg">30% OFF</span>
        <h4>{name}</h4>
      </div>
    </div>
  ) : (
    <div
      className="relative flex flex-col m-2 bg-white z-30 p-5 hover:shadow-2xl shadow-lg rounded-md transform transition-shadow cursor-pointer"
      onClick={() => router.replace(`/products/${id}`)}
    >
      <Image
        src={src}
        height={93}
        width={115}
        objectFit="contain"
        quality={100}
      />
      <div className="text-center text-xs text-gray-700 uppercase">
        <h4 className="mt-3">up to</h4>
        <span className="font-bold text-xl">30% OFF</span>
        <h4>{name}</h4>
        <span className="hidden lg:inline-flex capitalize text-blue-500 font-medium mt-2 hover:text-blue-400">
          See offers
        </span>
      </div>
    </div>
  );
};
export default Category;
