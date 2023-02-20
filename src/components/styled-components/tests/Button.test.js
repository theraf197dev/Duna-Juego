import { render } from "@testing-library/react";
import Button from '../components/Button.jsx';

describe('Button tests', () => {
  let props = {
    buttonText: 'testButton',
    handleClick: jest.fn(),
  };

  it('render component', () => {
      const { container } = render(<Button {...props} />);

      expect(container).toMatchSnapshot();
  });
});
