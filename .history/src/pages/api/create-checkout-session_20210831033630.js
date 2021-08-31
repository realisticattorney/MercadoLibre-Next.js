// api folder is backend code
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const successUrl = process.env.HOST + '/success';
const cancelUrl = process.env.HOST + '/checkout';

export default async (req, res) => {
  const { items, email } = req.body;

  const transformedItems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: 'ars',
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_rates: ['shr_1JSf5pBQb7JmoLpkuJqFl9PW'],
    shipping_address_collection: {
      allowed_countries: ['US', 'CA', 'MX', 'GB', 'AU'],
    },
    line_items: transformedItems,
    mode: 'payment',
    success_url: "https://mercado-libre-next-js-2dqagiag6-realisticattorney.vercel.app/success",
    cancel_url: cancelUrl,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.thumbnail)),
    },
  });

  res.status(200).json({ id: session.id });
};
