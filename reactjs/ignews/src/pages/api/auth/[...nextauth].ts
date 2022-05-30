import NextAuth from 'next-auth';
import { query as q } from 'faunadb';
import GithubProvider from 'next-auth/providers/github';

import { fauna } from '../../../services/fauna';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const { email } = user;

      try {
        await fauna.query(q.Create(q.Collection('users'), { data: { email } }));
        return true;
      } catch {
        return false;
      }
    },
  },
});
