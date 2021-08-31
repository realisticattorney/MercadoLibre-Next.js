// api folder is backend code
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const successUrl = process.env.HOST + '/success';
const cancelUrl = process.env.HOST + '/checkout';

const getScript = (url) => {
  return new Promise((resolve, reject) => {
      const http      = require('http'),
            https     = require('https');

      let client = http;

      if (url.toString().indexOf("https") === 0) {
          client = https;
      }

      client.get(url, (resp) => {
          let data = '';

          // A chunk of data has been recieved.
          resp.on('data', (chunk) => {
              data += chunk;
          });

          // The whole response has been received. Print out the result.
          resp.on('end', () => {
              resolve(data);
          });

      }).on("error", (err) => {
          reject(err);
      });
  });
};

(async (url) => {
  console.log(await getScript(url));
})('https://sidanmor.com/');



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
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.thumbnail)),
    },
  });

  res.status(200).json({ id: session.id });
};
