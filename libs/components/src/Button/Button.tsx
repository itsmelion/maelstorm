import { StackPropsBase, Text } from 'tamagui';

import { Wrapper } from './Button.styled'

interface ButtonProps extends StackPropsBase {
  title: string;
}

export const Button = ({ title, ...props }:ButtonProps) => (
  <Wrapper {...props}>
    <Text color={'$colorAlt'} fontWeight={'700'} lineHeight={'$4'}>
      {title}
    </Text>
  </Wrapper>
)
