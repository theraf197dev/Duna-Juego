import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import fixtures from '../../../common/fixtures';
import { GameStatus } from "../../../common/utils";
import Controller from "../Controller";

describe('Controller tests', () => {
  let props = {
    ...fixtures,
    currentPos: {
      x: 3,
      y: 4,
    },
    gameStatus: GameStatus.playing,
  };

  it('render component', () => {
      const { container } = render(<Controller {...props} />);

      expect(container).toMatchSnapshot();
  });

  it('handleChangePosition has been called when click on button', async () => {
    const testProps = {
      ...props,
      setCurrentPos: jest.fn(),
    };

      render(<Controller {...testProps} />);

      const upButton = await screen.findByTestId('fn-controls-button-up');
      userEvent.click(upButton);

      expect(testProps.setCurrentPos).toHaveBeenCalled();
  });

  it('handleChangePosition function changes currentPosition when button is clicked', async () => {
    const testProps = {
      ...props,
      currentPos: {
        x: 0,
        y: 0,
      },
      setCurrentPos: jest.fn(),
    };

      render(<Controller {...testProps} />);

      const upButton = await screen.findByTestId('fn-controls-button-up');
      userEvent.click(upButton);

      expect(testProps.setCurrentPos).not.toHaveBeenCalled();
  });

  it('handleBark function has been called when center button is clicked', async () => {
      const { container } = render(<Controller {...props} />);

      const barkButton = await screen.findByTestId('fn-controls-bark');
      userEvent.click(barkButton);

      expect(container).toMatchSnapshot();
  });
});
