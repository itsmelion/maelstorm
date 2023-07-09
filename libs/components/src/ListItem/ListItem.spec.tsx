import { render } from '@testing-library/react-native';

import {ListItem} from './ListItem';
import { ThemeProvider } from '../theme/test.config';

describe('Button', () => {
  it('should render successfully', () => {
    const { root } = render((
      <ThemeProvider>
        <ListItem title='Coffee' />
      </ThemeProvider>
    ));

    expect(root).toBeTruthy();
  });
});
