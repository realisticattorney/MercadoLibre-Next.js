import Image from 'next/image';

//sticky header
//next.js Image component compress your image making it smaller w/o losing quality

const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow">
          {/*objectFit keeps the aspect ratio*/}
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div>
        <h2>Im a heada</h2>
      </div>
    </header>
  );
};

export default Header;
