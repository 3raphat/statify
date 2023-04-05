import { SiBuymeacoffee, SiKofi } from 'react-icons/si'

type Link = {
  label: string
  url: string
  icon?: React.ReactElement
  colorScheme?: string
}

export const links: Array<Link> = [
  {
    label: 'Ko-fi',
    url: 'https://ko-fi.com/3raphat',
    icon: <SiKofi />,
    colorScheme: 'cyan',
  },
  {
    label: 'Buy Me a Coffee',
    url: 'https://www.buymeacoffee.com/3raphat',
    icon: <SiBuymeacoffee />,
    colorScheme: 'yellow',
  },
]
