import { render } from "@testing-library/react";
import fixtures from '../../../common/fixtures';
import Model from "../Model";

describe('Model tests', () => {
  let props = {
    ...fixtures,
    restartGame: jest.fn(),
  };

  it('render component', () => {
      const { container } = render(<Model {...props} />);

      expect(container).toMatchSnapshot();
  });
});
