import { render } from "@testing-library/react";
import fixtures from '../../../common/fixtures';
import { GameStatus } from "../../../common/utils";
import View from "../View.jsx";

describe('View tests', () => {
  let props = {
    ...fixtures,
    currentPos: {
      x: 3,
      y: 4,
    },
    gameStatus: GameStatus.playing,
  };

  it('render component', () => {
      const { container } = render(<View {...props} />);

      expect(container).toMatchSnapshot();
  });
});
