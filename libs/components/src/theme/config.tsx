import { createTamagui, createTokens, TamaguiProvider } from 'tamagui'; // or '@tamagui/core'

const size = {
  0: 0,
  1: 6,
  2: 12,
  true: 6,
};

export const tokens = createTokens({

  size,

  space: { ...size, '-1': -5, '-2': -10 },

  radius: { 0: 0, 1: 3 },

  zIndex: { 0: 0, 1: 100, 2: 200 },

  color: {

    white: '#fff',

    black: '#000',

  },

});

const config = createTamagui({

  fonts: {},

  tokens,

  themes: {

    light: {

      bg: '#f2f2f2',

      color: tokens.color.black,

    },

    dark: {

      bg: '#111',

      color: tokens.color.white,

    },

  },

  shorthands: {

    px: 'paddingHorizontal',

    f: 'flex',

    w: 'width',

  } as const,

  // Experimental / advanced, only for overriding the core component styles

  // Prefer to use styled() for building your own, only useful for edge cases.

  defaultProps: {
    Text: {
      // override any default props here
    },
  },

});

// this will give you types for your components

// note - if using your own design system, put the package name here instead of tamagui

declare module 'tamagui' {

  type TamaguiCustomConfig = typeof config;

}

export const ThemeProvider = (props) => <TamaguiProvider {...props} config={config} />;
