/** @type {import('next-seo').DefaultSeoProps} */
const SEO = {
  title: undefined,
  titleTemplate: '%s | Statify',
  defaultTitle: 'Statify',
  description: 'Get to know your Spotify listening habits and manage your playlists',
  canonical: 'https://statify.3raphat.ga',
  openGraph: {
    url: 'https://statify.3raphat.ga',
    title: 'Statify',
    description: 'Get to know your Spotify listening habits and manage your playlists',
    images: [
      {
        url: 'https://statify.3raphat.ga/og.png',
        alt: 'Statify og image',
      },
    ],
    siteName: 'Statify',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
}

export default SEO
