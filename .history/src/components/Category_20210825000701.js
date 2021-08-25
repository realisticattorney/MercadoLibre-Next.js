import Image from 'next/image';
//line-clamp to interrupt text once it gets too long
//focus:ring-0 to remove the focus
const Category = ({ category }) => {
  const { id, name, src } = category;

  return id === 3 ||
    id === 4 ||
    id === 5 ||
    id === 6 ||
    id === 13 ||
    id === 16 ? (
    <div className="col-span-full lg:col-span-2 relative flex flex-col m-2 bg-white z-30 p-5 hover:shadow-xl shadow-lg rounded-sm md: transform transition-shadow h-48">
        <Image src={src} layout="fill" objectFit="cover" className="rounded-sm" />
        <div className="absolute bottom-4 left-4 bg-gray-50 rounded-md p-3.5 text-xs text-gray-700 uppercase">
          <h4>up to</h4>
          <span className="font-bold text-2xl">30% OFF</span>
          <h4>{name}</h4>
        </div>
    </div>
  ) : id === 9 || id === 10 ? (
    <div className="lg:col-span-3">
      <div className="relative flex flex-col m-2 bg-white z-30 p-5 hover:shadow-xl shadow-lg rounded-md transform transition-shadow ">
        <Image src={src} height={112} width={115} objectFit="contain" />
        <div className="text-center text-xs text-gray-700 uppercase">
          <h4 className="mt-3">up to</h4>
          <span className="font-bold text-lg">30% OFF</span>
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  ) : (
    <div className="relative flex flex-col m-2 bg-white z-30 p-5 hover:shadow-xl shadow-lg rounded-md transform transition-shadow ">
      <Image src={src} height={112} width={115} objectFit="contain" />
      <div className="text-center text-xs text-gray-700 uppercase">
        <h4 className="mt-3">up to</h4>
        <span className="font-bold text-lg">30% OFF</span>
        <h4>{name}</h4>
      </div>
    </div>
  );
};
export default Category;