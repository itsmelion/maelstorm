import {TextInputProps} from 'react-native';

import { preset, fieldTypes } from './input.helpers'
import { Input } from './input.styled';

interface FieldProps extends TextInputProps {
  type: fieldTypes;
}

export const Field = ({ type, ...props }: FieldProps) => (
  <Input
    {...preset(type)}
    {...props}
  />
);
