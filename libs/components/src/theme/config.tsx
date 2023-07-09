import { createAnimations } from '@tamagui/animations-moti';
import { useColorScheme } from 'react-native';
import { createFont, createTamagui, createTokens, TamaguiProvider, TamaguiProviderProps, Theme } from 'tamagui';

export const tokens = createTokens({
  size: {
    0: 0,
    1: 6,
    2: 12,
    3: 18,
    4: 24,
    true: 6,
  },

  space: {
    0: 0,
    1: 6,
    2: 12,
    3: 18,
    4: 24,
    '-1': -5, '-2': -10,
    true: 6,
  },

  radius: {
    0: 0,
    1: 6,
    2: 12,
    3: 18,
    4: 24,
  },

  zIndex: { 0: 0, 1: 100, 2: 200 },

  color: {
    white: '#fff',
    black: '#000',
    bg: '#76b5c5',
    bgLight: '#e6ffff',
    text: '#0f3c4c',
    textAlt: '#e9f5f9',
    blue: '#2596be',
  },

});

export const config = createTamagui({
  disableSSR: true,
  reactNative: true,
  fonts: {
    body: createFont({
      family: 'Assistant',
      size: {
        4: 14,
        true: 14,
        heading: 44,
      },
      lineHeight: {
        4: 16,
        true: 16,
      },
      face: {
        // pass in weights as keys
        200: { normal: 'Assistant-ExtraLight', italic: 'Assistant-ExtraLightItalic' },
        300: { normal: 'Exo2-Light', italic: 'Exo2-LightItalic' },
        400: { normal: 'Assistant-Regular', italic: 'Assistant-Italic' },
        600: { normal: 'Assistant-Medium', italic: 'Assistant-MediumItalic' },
        700: { normal: 'Assistant-SemiBold', italic: 'Assistant-SemiBoldItalic' },
        800: { normal: 'Assistant-Bold', italic: 'Assistant-BoldItalic' },
        900: { normal: 'Exo2-Black', italic: 'Exo2-BlackItalic' },
      },
    }),
    heading: createFont({
      family: 'Exo2',
      size: {
        4: 24,
        true: 24,
      },
      lineHeight: {
        4: 28,
        true: 28,
      },
      face: {
        // pass in weights as keys
        200: { normal: 'Assistant-ExtraLight', italic: 'Assistant-ExtraLightItalic' },
        300: { normal: 'Exo2-Light', italic: 'Exo2-LightItalic' },
        400: { normal: 'Assistant-Regular', italic: 'Assistant-Italic' },
        600: { normal: 'Assistant-Medium', italic: 'Assistant-MediumItalic' },
        700: { normal: 'Assistant-SemiBold', italic: 'Assistant-SemiBoldItalic' },
        800: { normal: 'Assistant-Bold', italic: 'Assistant-BoldItalic' },
        900: { normal: 'Exo2-Black', italic: 'Exo2-BlackItalic' },
      },
    })
  },

  tokens,

  themes: {
    light: {
      bg: tokens.color.bgLight,
      color: tokens.color.text,
      colorAlt: tokens.color.textAlt,
      primary: tokens.color.blue,
      overlay: tokens.color.black,
    },

    dark: {
      bg: tokens.color.bg,
      color: tokens.color.textAlt,
      colorAlt: tokens.color.text,
      primary: tokens.color.blue,
      overlay: tokens.color.bgLight,
    },
  },

  shorthands: {
    f: 'flex',
    w: 'width',
    bg: 'backgroundColor',
    m: 'margin',
    mt: 'marginTop',
    mb: 'marginBottom',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    p: 'padding',
    pt: 'paddingTop',
    pb: 'paddingBottom',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
  } as const,

  animations: createAnimations({
    fast: {
      type: 'spring',
      damping: 20,
      mass: 1.2,
      stiffness: 250,
    },
    medium: {
      type: 'spring',
      damping: 10,
      mass: 0.9,
      stiffness: 100,
    },
    slow: {
      type: 'spring',
      damping: 20,
      stiffness: 60,
    },
  }),
});

// this will give you types for your components
// note - if using your own design system, put the package name here instead of tamagui
/* eslint-disable @typescript-eslint/no-empty-interface, @typescript-eslint/ban-ts-comment */
// @ts-ignore
type AppConfig = typeof config;
declare module 'tamagui' {
  // @ts-ignore
  interface TamaguiCustomConfig extends AppConfig {}
}
/* eslint-enable @typescript-eslint/no-empty-interface, @typescript-eslint/ban-ts-comment */

export const ThemeProvider = ({ children, ...props }: Partial<TamaguiProviderProps>) => {
  const colorScheme = useColorScheme();

  return (
    <TamaguiProvider config={config} {...props}>
      <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
        {children}
      </Theme>
    </TamaguiProvider>
  );
};
