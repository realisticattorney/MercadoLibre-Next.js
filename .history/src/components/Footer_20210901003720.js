const Footer = () => {
  return (
    <div className="bg-white p-4 justify-between mt-5 shadow-sm border-t border-gray-200">
      <div className="flex-col space-y-1">
        <ul className="flex space-x-5 text-xs text-gray-700 mt-1">
          <li className="cursor-pointer">Work with us</li>
          <li className="cursor-pointer">Terms & Conditions</li>
          <li className="cursor-pointer">Privacy</li>
          <li>Help</li>
          <li>Consumer Defense</li>
          <li>Developers</li>
          <li>Trends</li>
          <li className="hidden sm:inline-flex">Security Center</li>
          <li className="hidden md:inline-flex">About us</li>
        </ul>
        <div className="justify-between flex items-center pt-3">
        <h3 className="text-gray-500 text-sm font-medium">
          This app is a demo built for educational purposes</h3>
          <h3 className="text-gray-700 text-right text-sm font-bold">
            <span className="text-gray-500 font-medium">built by</span> German
            Aquila
          </h3>
        </div>
      </div>

    </div>
  );
};

export default Footer;
