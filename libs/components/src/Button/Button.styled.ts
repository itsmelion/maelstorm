import { styled, View } from 'tamagui';

export const Wrapper = styled(View, {
  alignItems: 'center',
  flexDirection: 'row',
  backgroundColor: '$primary',
  borderRadius: '$2',
  paddingVertical: '$1',
  paddingHorizontal: '$2',

  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 'auto',
  flexWrap: 'nowrap',
});
