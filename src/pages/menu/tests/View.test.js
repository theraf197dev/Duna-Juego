import React, { useCallback, useState } from "react";
import { render } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import View from "../View.jsx";
import fixtures from "../../../common/fixtures.js";

function useHooks() {
  const [difficultyLvl, setDifficultyLvl] = useState(1);

  const changeDifficulty = useCallback(() => setDifficultyLvl(2));

  return { difficultyLvl, changeDifficulty };
};

describe('View tests', () => {
  let props = fixtures;

  it('render component', () => {
      const { container } = render(<View {...props} />);

      expect(container).toMatchSnapshot();
  });

  it('render component without games', () => {
      const testProps = {
        ...props,
        games: {
          items: [],
        },
      };

      const { container } = render(<View {...testProps} />);

      const games = container.querySelector('[data-testid="fn-game-item"]');

      expect(games).not.toBeInTheDocument();
  });

  test('should change difficulty', () => {
    const { result } = renderHook(() => useHooks())

    act(() => {
      result.current.changeDifficulty()
    });

    expect(result.current.difficultyLvl).toBe(2);
  })
});


