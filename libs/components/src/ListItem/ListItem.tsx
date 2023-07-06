import { Text, H3 } from 'tamagui'

import { Wrapper } from './ListItem.styled'
import { Flex } from '../layout/Flex'

export const ListItem = ({ title }) => (
  <Wrapper>
    <H3 color={'$colorAlt'} fontWeight={'900'} >{title}</H3>
    <Flex />
    <Text color={'$colorAlt'} fontWeight={'600'}>{'>'}</Text>
  </Wrapper>
)
