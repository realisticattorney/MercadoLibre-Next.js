// api folder is backend code
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

const transformedItems = items.map(item => {
   
//I'm getting the items array and the email of the user logged in
//   console.log(items);
//   console.log(email);
};
