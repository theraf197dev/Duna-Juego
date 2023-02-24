import { render } from "@testing-library/react";
import View from "../View.jsx";

describe('View tests', () => {
  const props = {
    handleEndOfTimer: jest.fn(),
    stopTimer: false,
    time: 3,
  };

  it('render component', () => {
      const { container } = render(<View {...props} />);

      expect(container).toMatchSnapshot();
  });

  it('wait until the timer ends', () => {
    const testProps = {
      ...props,
      time: 1,
    };

    render(<View {...testProps} />);

    setTimeout(() => {
      expect(props.handleEndOfTimer).toHaveBeenCalled();
    }, props.time + 1000);
  });

  it('verify timer stop when stopTimer is active', () => {
    const testProps = {
      ...props,
      stopTimer: true,
      time: 1,
    };

    render(<View {...testProps} />);

    setTimeout(() => {
      expect(props.handleEndOfTimer).toHaveBeenCalled();
    }, props.time + 10);
  });
});
