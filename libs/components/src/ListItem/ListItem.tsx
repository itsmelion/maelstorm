import { Text, H3, StackProps } from 'tamagui'

import { Wrapper } from './ListItem.styled'
import { Flex } from '../layout/Flex';

interface ListItemProps extends StackProps {
  title: string;
}

export const ListItem = ({ title, ...props }: ListItemProps) => (
  <Wrapper {...props}>
    <H3 color={'$colorAlt'} fontWeight={'900'} >{title}</H3>
    <Flex />
    <Text color={'$colorAlt'} fontWeight={'600'}>{'>'}</Text>
  </Wrapper>
);
