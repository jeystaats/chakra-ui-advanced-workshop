import { extendTheme } from '@chakra-ui/react';
import { PageStylesConfig } from './components/Page/Page.styles';
import { CardStylesConfig } from './components/Card/Card.styles';
import { mode } from '@chakra-ui/theme-tools';


export const theme = extendTheme({
  components: {
    Page: PageStylesConfig,
    Card: CardStylesConfig,   
  },
  colors: {
    brand: {
      primary: '#0070f3',
      secondary: '#ff4081',
    },
  },
  sizes: {},
  styles: {
    global: (props) => ({      
      body: {
        bg: mode('gray.100', 'gray.600')(props),
        color: mode('black', 'white')(props),
      },
    }),
  },
});
