import { mode } from '@chakra-ui/theme-tools';

const baseStyle = props => ({
  wrapper: {
    bg: mode('white', 'gray.800')(props),
    mx: 'auto',
    px: 8,
    py: 4,
    rounded: 'lg',
    shadow: 'lg',
    maxW: '2xl',
  },
  body: {},
  header: {},
  footer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    mt: 4,
  },
});

export const CardStylesConfig = {
  parts: ['wrapper', 'body', 'header', 'footer'],
  baseStyle,
  defaultProps: {
    colorStatus: 'green.500',
  },
};
