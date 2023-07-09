import { render } from '@testing-library/react-native';
import React from 'react';

import {AppMocked} from './AppMocked';

test('App renders correctly', () => {
  const { root } = render(<AppMocked />);
  expect(root).toHaveTextContent('My test is so cool!');
});
