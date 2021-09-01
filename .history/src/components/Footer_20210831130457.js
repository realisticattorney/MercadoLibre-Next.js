const Footer = () => {
   return (
      <div className="bg-white p-4 justify-between mt-5 shadow-sm border-t-1 texg">
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
         <h3 className="text-gray-500 text-sm font-medium">This app is a demo built only for educational purposes</h3>
         <h3 className="text-gray-700 text-center text-sm font-bold"><span className="text-gray-500 font-medium">built by</span> German Aquila</h3>
      </div>
       <div className="justify-end text-right -mt-10 pr-5">
       <button className="bg-yellow-300 text-xs p-2 border-gray-400 border text-gray-600 rounded-md">See my other projects</button>
       </div>

      </div>
   )
}

export default Footer
