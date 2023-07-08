import { H3, StackProps } from 'tamagui'

import { Wrapper } from './ListItem.styled'
import { Chevron } from '../icons/Chevron';
import { Flex } from '../layout/Flex';

interface ListItemProps extends StackProps {
  title: string;
}

export const ListItem = ({ title, ...props }: ListItemProps) => (
  <Wrapper {...props}>
    <H3 color={'$color'} fontWeight={'600'} >{title}</H3>
    <Flex />
    <Chevron />
  </Wrapper>
);
