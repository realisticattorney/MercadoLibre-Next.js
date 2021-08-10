import Image from 'next/image';

//sticky header
//next.js Image component compress your image making it smaller w/o losing quality

const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          {/*objectFit keeps the aspect ratio*/}
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={35}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
      <div>
        <input type="text" />
      </div>
      </div>
    </header>
  );
};

export default Header;
