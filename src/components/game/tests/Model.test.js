import { render, screen } from "@testing-library/react";
import fixtures from '../../../common/fixtures';
import { GameMode } from "../../../common/utils";
import Model from "../Model";

describe('Model tests', () => {
  const props = {
    ...fixtures,
    restartGame: jest.fn(),
  };

  it('render component [TRIAL]', () => {
      const { container } = render(<Model {...props} />);

      expect(container).toMatchSnapshot();
  });

  it('render component with difficulty 2 [TRIAL]', () => {
    const testProps = {
      ...props,
      difficulty: 2,
    };
    const { container } = render(<Model {...testProps} />);

    expect(container).toMatchSnapshot();
  });

  it('render component [SEEKER]', () => {
      const testProps = {
        ...props,
        difficulty: 2,
        mode: GameMode.seeker,
      };
      const { container } = render(<Model {...testProps} />);

      expect(container).toMatchSnapshot();
  });

  it('render component with difficulty 2 [SEEKER]', () => {
    const testProps = {
      ...props,
      difficulty: 2,
      mode: GameMode.seeker,
    };
    const { container } = render(<Model {...testProps} />);

    expect(container).toMatchSnapshot();
  });
});
