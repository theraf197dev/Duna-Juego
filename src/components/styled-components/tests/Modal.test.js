import { render } from "@testing-library/react";
import Modal from '../components/Modal.jsx';

describe('Modal tests', () => {
  let props = {
    handleChange: jest.fn(),
    id: 'testId',
    value: false,
  };

  it('render component', () => {
      const { container } = render(<Modal {...props} />);

      expect(container).toMatchSnapshot();
  });
});
