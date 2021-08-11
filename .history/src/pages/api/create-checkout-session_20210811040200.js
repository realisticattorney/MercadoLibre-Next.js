// api folder is backend code
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

const transformedItems = items.map(item => ({
   description: item.description,
   price_data: {
      currency: "usd",
      unit_amount: item.price * 100,
      product_data: {
         name: item.title,
         images: [item.image],


//I'm getting the items array and the email of the user logged in
//   console.log(items);
//   console.log(email);
};