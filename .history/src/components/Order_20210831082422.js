import moment from 'moment';

const Order = ({ order }) => {
  return (
    <div className="relative border rounded-md bg-white border-1 bg-gray-600">
      <div className="flex items-center space-x-10 bg-gray-100 p-5 text-sm">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{moment.unix(order.timestamp).format('DD MMM YYYY')}</p>
        </div>

        <div>
          <p className="text-xs font-bold">
            TOTAL $ {Math.floor(order.amount + order.amountShipping)}
          </p>
          <p>
            <span className="uppercase">{order.items[0].currency} $</span>
            {Math.floor(order.amount)} - Shipping{' '}
            <span className="uppercase">{order.items[0].currency} $</span>
            {order.amountShipping}
          </p>
        </div>

        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {order.items.length} items
        </p>

        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER # {order.id}{' '}
        </p>
      </div>

      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {order.images.map((image) => (
            <img
              src={image}
              alt="product"
              className="h-20 object-contain sm:h-32"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
//order.amount is the total w/o shipping , amountShipping
