//no https // no protocol  & no path. just domain
module.exports = {
  images: {
    domains: ['http2.mlstatic.com', 'fakestoreapi.com'],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
