const Footer = () => {
   return (
      <div className="bg-white p-4 justify-between">
      <div className="flex-col">
         <ul className="flex space-x-2 text-xs text-gray-700">
            <li>Work with us</li>
            <li>Terms & Conditions</li>
            <li>Privacy</li>
            <li>Help</li>
            <li>Consumer Defense</li>
         </ul>
         <h3 className="text-gray-500 text-sm font-medium">This app is a demo built only for educational purposes</h3>
         <h3 className="text-gray-700 text-sm font-bold">German Aquila</h3>
      </div>
       <div className="justify-end text-right">
       <h3 className="">See my other projects</h3>
       </div>

      </div>
   )
}

export default Footer
