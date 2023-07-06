import { render } from '@testing-library/react-native';

import {ListItem} from './ListItem';

describe('Button', () => {
  it('should render successfully', () => {
    const { root } = render(<ListItem title='Coffee' />);
    expect(root).toBeTruthy();
  });
});
