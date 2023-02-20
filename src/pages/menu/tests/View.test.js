import { render } from "@testing-library/react";
import View from "../View.jsx";
import fixtures from "../../../common/fixtures.js";

describe('View tests', () => {
  let props = fixtures;

  it('render component', () => {
      const { container } = render(<View {...props} />);

      expect(container).toMatchSnapshot();
  });
});
