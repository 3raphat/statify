/** @type {import('next-seo').DefaultSeoProps} */
const SEO = {
  title: undefined,
  titleTemplate: '%s | Statify',
  defaultTitle: 'Statify',
  description: 'Get to know your Spotify listening habits and manage your playlists',
  canonical: 'http://localhost:3000',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
}

export default SEO
