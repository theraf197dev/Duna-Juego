import { render } from "@testing-library/react";
import fixtures from '../../../common/fixtures';
import { GameStatus } from "../../../common/utils";
import Controller from "../Controller";

describe('Controller tests', () => {
  let props = {
    ...fixtures,
    currentPos : {
      x: 3, y: 4,
    },
    restartGame: jest.fn(),
    gameStatus: GameStatus.playing,
    lastInput: {
      vector: 'x',
      incr: -1,
    },
    setLastInput: jest.fn(),
  };

  it('render component', () => {
      const { container } = render(<Controller {...props} />);

      expect(container).toMatchSnapshot();
  });
});
