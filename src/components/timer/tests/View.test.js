import { render } from "@testing-library/react";
import View from "../View.jsx";

describe('View tests', () => {
  let props = {
    handleEndOfTimer: jest.fn(),
    stopTimer: false,
    time: 1,
  };

  it('render component', () => {
      const { container } = render(<View {...props} />);

      expect(container).toMatchSnapshot();
  });
});
