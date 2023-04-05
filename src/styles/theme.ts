import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Nunito', sans-serif`,
    body: `'Nunito', sans-serif`,
  },
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
    disableTransitionOnChange: false,
  },
  colors: {
    black: '#121212',
    white: '#FFFAFA',
    dark: {
      '50': '#4a4a4a',
      '100': '#3c3c3c',
      '200': '#323232',
      '300': '#2d2d2d',
      '400': '#222222',
      '500': '#1f1f1f',
      '600': '#1c1c1e',
      '700': '#1b1b1b',
      '800': '#181818',
      '900': '#0f0f0f',
    },
    light: {
      '50': '#fdfdfd',
      '100': '#fcfcfc',
      '200': '#fafafa',
      '300': '#f8f9fa',
      '400': '#f6f6f6',
      '500': '#f2f2f2',
      '600': '#f1f3f5',
      '700': '#e9ecef',
      '800': '#dee2e6',
      '900': '#dde1e3',
    },
    green: {
      '50': '#8edcaa',
      '100': '#77d598',
      '200': '#61ce87',
      '300': '#4ac776',
      '400': '#34c065',
      '500': '#1db954',
      '600': '#1aa74c',
      '700': '#17a148',
      '800': '#179443',
      '900': '#14823b',
    },
  },
  styles: {
    global: (props: any) => ({
      'html, body': {
        fontSize: 'base',
        bg: props.colorMode === 'light' ? 'light.600' : 'dark.800',
        color: props.colorMode === 'light' ? 'dark.700' : 'light.500',
      },
      '.with-shadow': {
        borderRadius: 10,
        border: '2px solid var(--chakra-colors-black)',
        boxShadow: '0px 4px 0px var(--chakra-colors-black)',
        marginBottom: '4px',
        transition: 'all 0.2s ease-in-out',
        _hover: {
          transform: 'translateY(2px)',
          boxShadow: '0px 2px 0px var(--chakra-colors-black)',
        },
        _active: {
          transform: 'translateY(4px)',
          boxShadow: '0px 0px 0px var(--chakra-colors-black)',
        },
      },
      '.with-shadow-no-animated': {
        borderRadius: 10,
        border: '2px solid var(--chakra-colors-black)',
        boxShadow: '0px 4px 0px var(--chakra-colors-black)',
        marginBottom: '4px',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 10,
        border: '2px solid var(--chakra-colors-black)',
        boxShadow: '0px 4px 0px var(--chakra-colors-black)',
        marginBottom: '4px',
        transition: 'all 0.2s ease-in-out',
        _hover: {
          transform: 'translateY(2px)',
          boxShadow: '0px 2px 0px var(--chakra-colors-black)',
        },
        _active: {
          transform: 'translateY(4px)',
          boxShadow: '0px 0px 0px var(--chakra-colors-black)',
        },
      },
    },
  },
})

export default theme
