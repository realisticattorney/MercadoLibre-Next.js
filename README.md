# MercadoLibre Next

A MercadoLibre's e-commerce app clone, perhaps the only one on the web, built using Next.js, Stripe, Firebase, MercadoLibre's API, TailwindCSS, NextAuth and more. Click on any of category on the homepage and you'll be served instantly with products that are pre-fetched each 60 seconds from MercadoLibre's API (ISR). For the categories found on the dropdown menus at the navigation bar, will served fetching those products just in time (SSR). Either way, you can add products to your cart, go to checkout and pay for them through Stripe. Down below I'll give more details of how.

## Live demo

[live demo](https://mercado-libre-next-js.vercel.app/)

## Built With

- Next.js (React & Node)
- Redux (Shopping cart products handling)
- NextAuth (Authentication & Authorization)
- Firebase (Authentication & Shopping cart succesful orders persistance)
- MercadoLibre's API (fetching products & categories seen as filters side-bar)
- TailwindCSS (CSS framework)
- Stripe (Payment gateway)

## How to start the project from your Local enviroment

- Open your terminal and cd where you want to store the project
- Run the following command - `git clone https://github.com/realisticattorney/MoneyKeeper-React`
- Cd into the directory - `cd MoneyKeeper-React`
- Run `npm install` to install all dependencies
- Run `npm start` or `yarn start`, this automatically open your browser and the app.



## Author

👤 **German Aquila**

- GitHub: [@realisticattorney](https://github.com/realisticattorney)
- Twitter: [@ContoliAxl](https://www.twitter.com/contoliaxl)
- Linkedin: [@germanaquila](https://www.linkedin.com/in/germanaquila/)