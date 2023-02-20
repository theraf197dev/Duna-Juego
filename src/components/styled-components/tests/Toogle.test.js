import { render } from "@testing-library/react";
import Toogle from '../components/Toggle';

describe('Toogle tests', () => {
  let props = {
    handleChange: jest.fn(),
    id: 'testId',
    value: false,
  };

  it('render component', () => {
      const { container } = render(<Toogle {...props} />);

      expect(container).toMatchSnapshot();
  });
});
