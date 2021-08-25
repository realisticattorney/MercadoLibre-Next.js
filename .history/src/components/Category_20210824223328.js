import Image from 'next/image';
//line-clamp to interrupt text once it gets too long
//focus:ring-0 to remove the focus
const Category = ({ category }) => {
  const { id, name, src } = category;

  return (
    <div className="relative flex flex-col m-2 bg-white z-30 p-5 hover:shadow-xl shadow-lg rounded-md transform transition-shadow ">
      <Image src={src} height={112} width={115} objectFit="contain" />
      <div className="">
      <h4 className="mt-3 text-xs uppercase text-gray-700">{name}</h4>
      <span className="font-bold text-lg">30% OFF</span>
      <h4 className="text-xs uppercase text-gray-700">{name}</h4>
      </div>
    </div>
  );
};
export default Category;
