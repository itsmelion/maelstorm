import {
  View,
  styled,
} from 'tamagui';

export const Wrapper = styled(View, {
  name: 'ListItem',

  flexShrink: 0,
  flexGrow: 0,
  flexDirection: 'row',
  flexWrap: 'nowrap',
  flexBasis: 'auto',
  minHeight: 60,
  width: '100%',
  alignItems: 'center',
  padding: '$2',

  pressStyle: {
    backgroundColor: 'rgba(30,43,80,0.05)',
  },
})
