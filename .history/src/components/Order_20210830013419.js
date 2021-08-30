import moment from "moment";

const Order = ({ objects }) => {
  const { id, title, price, category, thumbnail, shipping, timestamp } = product;

  return <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 bg-gray-100 p-5 text-sm text-gray-600">
   <div>
      <p className="font-bold text-xs">ORDER PLACED</p>
      <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
   </div>
      </div>
  </div>;
};

export default Order;
