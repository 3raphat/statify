import NextAuth, { NextAuthOptions } from 'next-auth'

import SpotifyProvider from 'next-auth/providers/spotify'
import { scopes } from './scopes'

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      authorization: `https://accounts.spotify.com/authorize?scope=${scopes.join(',')}`,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    async jwt({ token, user, account, profile }: any) {
      if (user && account) {
        token.access_token = account.access_token
        token.user = user
        token.user.country = profile.country
        if (account.expires_at < Date.now()) {
          token.access_token = account.refresh_token
        }
      }
      return token
    },
    async session({ session, token }: any) {
      session.access_token = token.access_token
      session.user = token.user
      return session
    },
  },
}

export default NextAuth(authOptions)
