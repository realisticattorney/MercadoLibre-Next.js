//no https // no protocol  & no path. just domain
module.exports = {
  images: {
    domains: ['links.papareact.com', 'http2.mlstatic.com', 'fakestoreapi.com'],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
