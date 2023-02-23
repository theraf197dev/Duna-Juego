import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import View from "../View.jsx";
import fixtures from "../../../common/fixtures.js";
import userEvent from "@testing-library/user-event";

describe('View tests', () => {
  let props = fixtures;

  it('render component', () => {
      const { container } = render(<View {...props} />);

      expect(container).toMatchSnapshot();
  });

  it('render component without games', () => {
      const testProps = {
        ...props,
        games: [],
      };

      const { container } = render(<View {...testProps} />);

      const games = container.querySelector('[data-testid="fn-game-item"]');

      expect(games).not.toBeInTheDocument();
  });
});
