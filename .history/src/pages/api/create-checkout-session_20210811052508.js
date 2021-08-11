// api folder is backend code
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const transformedItems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: 'usd',
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));
  //I'm getting the items array and the email of the user logged in
  //   console.log(items);
  //   console.log(email);
  //  stripe listen --forward-to localhost:3000/api/weboo
//acct_1JNAUjBQb7JmoLpk
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_rates: ['shr_1JNBbHBQb7JmoLpkxcqZGxqa'],
    shipping_address_collection: {
      allowed_countries: ['US', 'CA', 'MX', 'GB', 'AU'],
    },
    line_items: transformedItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};
