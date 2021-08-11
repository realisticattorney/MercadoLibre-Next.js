import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

//as simple as adding/replacing Google for Github or Facebook or Instagram
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  //   database: process.env.DATABASE_URL,
});
