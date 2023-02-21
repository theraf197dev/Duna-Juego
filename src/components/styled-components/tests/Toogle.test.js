import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it('toogleButton is clicked and his states changes', async () => {
      const testProps = {
        ...props,
        handleChange: jest.fn(),
      };

      render(<Toogle {...testProps} />);

      const toogleButton = await screen.findByTestId('fn-toogle-button');
      userEvent.click(toogleButton);

      expect(testProps.handleChange).toHaveBeenCalled();
  });
});
