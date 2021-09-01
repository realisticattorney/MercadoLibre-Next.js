const Footer = () => {
  return (
    <div className="bg-white p-4 justify-between mt-5 shadow-sm border-t border-gray-200">
      <div className="flex-col space-y-1">
        <ul className="flex space-x-5 text-xs text-gray-700 mt-1">
          <li>Work with us</li>
          <li>Terms & Conditions</li>
          <li>Privacy</li>
          <li>Help</li>
          <li>Consumer Defense</li>
          <li>Developers</li>
          <li>Trends</li>
          <li>Security Center</li>
          <li>Security Center</li>
        </ul>
        <div>
        
        <h3 className="text-gray-700 text-center text-sm font-bold mt-8">
          <span className="text-gray-500 font-medium">built by</span> German
          Aquila
        </h3>
        </div>
      </div>
      <div className="justify-end text-right -mt-8 pr-5">
        <button className=" text-xs py-1.5 px-3  text-gray-600 rounded-md">
        <h3 className="text-pink-600 text-sm font-medium">
          This app is a demo built for educational purposes
        </h3>
        </button>
      </div>
    </div>
  );
};

export default Footer;
