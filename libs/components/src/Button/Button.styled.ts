import {
  SizeTokens,
  Stack,
  Text,
  createStyledContext,
  styled,
  withStaticProperties,
} from 'tamagui';

export const ButtonContext = createStyledContext({
  size: '$md' as SizeTokens,
})

export const ButtonFrame = styled(Stack, {
  name: 'Button',
  animation: 'fast',

  flex: 1,
  maxWidth: 200,
  alignItems: 'center',
  flexDirection: 'row',
  backgroundColor: '$primary',

  pressStyle: {
    scale: 0.95,
    opacity: 0.5,
  },
})

export const Button = withStaticProperties(ButtonFrame, {
  Props: ButtonContext.Provider,
  Text,
})
