import {
  XStack,
  styled,
} from 'tamagui';

export const Wrapper = styled(XStack, {
  name: 'ListItem',
  animation: 'slow',

  flexShrink: 0,
  flexGrow: 0,
  flexBasis: 'auto',
  minHeight: 60,
  width: '100%',
  alignItems: 'center',
  backgroundColor: '$primary',
  padding: '$2',

  pressStyle: {
    opacity: 0.5,
  },
})
