import { TextInput } from 'react-native';
import { styled } from 'tamagui';

export const Input = styled(TextInput, {
  placeholderTextColor: "rgba(74, 74, 104, 0.5)",
  backgroundColor: 'rgba(0,0,0, 0.1)',
  borderRadius: '$2',
  paddingVertical: 10,
  paddingHorizontal: 14,
});
