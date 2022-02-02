import { render } from '@testing-library/react';

import Otherlib from './otherlib';

describe('Otherlib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Otherlib />);
    expect(baseElement).toBeTruthy();
  });
});
