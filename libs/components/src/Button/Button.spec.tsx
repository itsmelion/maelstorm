import { render } from '@testing-library/react-native';
import React from 'react';

import {Button} from './Button';
import { ThemeProvider } from '../theme/test.config';

describe('Button', () => {
  it('should render successfully', () => {
    const { root } = render(
      <ThemeProvider>
        <Button title='Coffee' />
      </ThemeProvider>
    );
    expect(root).toBeTruthy();
  });
});
