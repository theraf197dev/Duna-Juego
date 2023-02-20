import { render } from "@testing-library/react";
import App from "./App.js";

describe('App tests', () => {
  it('render component', () => {
      const { container } = render(<App />);

      expect(container).toMatchSnapshot();
  });
});
