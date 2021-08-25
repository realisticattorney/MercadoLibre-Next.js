import Image from 'next/image';
//line-clamp to interrupt text once it gets too long
//focus:ring-0 to remove the focus
const Category = ({ category }) => {
  const { id, name, src } = category;

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 hover:shadow-xl shadow-lg rounded-md transform transition-shadow ">
      <Image src={src} height={115} width={200} objectFit="contain" />
      <h4 className="my-3">{name}</h4>
    </div>
  );
};
export default Category;
