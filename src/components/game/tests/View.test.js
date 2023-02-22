import { render } from "@testing-library/react";
import fixtures from '../../../common/fixtures';
import { GameStatus } from "../../../common/utils";
import Game from "../View";

describe('View tests', () => {
  let props = {
    ...fixtures,
    currentPos : {
      x: 3, y: 4,
    },
    gameStatus: GameStatus.playing,
    endGame: jest.fn(),
    restartGame: jest.fn(),
    lastInput: {
      vector: 'x',
      incr: -1,
    },
    setCurrentPos: jest.fn(),
  };

  it('render component', () => {
      const { container } = render(<Game {...props} />);

      expect(container).toMatchSnapshot();
  });
});
