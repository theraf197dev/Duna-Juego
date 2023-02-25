import { CellType, GameMode, GameStatus } from "../../../common/utils";
import {
    setInitBoard,
    setBoard,
} from "../helper";
import { chooseImage } from "../helper/props";
import seekerMove  from '../helper/seeker';

describe('Helper tests', () => {
  it('verify board modify its value based on props (setBoard)', () => {
      const props = {
          board: [
              [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
              [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
              [CellType.blank, CellType.blank, CellType.player, CellType.blank, CellType.blank],
              [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
              [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
          ],
          value: CellType.pizza,
          x: 1,
          y: 1,
      };

      setBoard(props.board, props.value, props.x, props.y);

      expect(props.board[props.x][props.y]).toBe(props.value);
  });

  it('verify board is returned with expected data', () => {
      const props = {
          size: 9,
          mode: GameMode.seeker,
          difficulty: 1,
      };

      const expectedResult = {
          board: [
              [
                'seeker', 'pizza',
                'pizza',  'pizza',
                'pizza',  'pizza',
                'pizza',  'pizza',
                'pizza'
              ],
              [
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza'
              ],
              [
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza'
              ],
              [
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza'
              ],
              [
                'pizza', 'pizza',
                'pizza', 'pizza',
                'player',  'pizza',
                'pizza', 'pizza',
                'pizza'
              ],
              [
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza'
              ],
              [
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza'
              ],
              [
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza'
              ],
              [
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza', 'pizza',
                'pizza'
              ]
            ],
            pizzas: 80,
      };

      const data = setInitBoard(props.size, props.mode, props.difficulty);
      expect(data).toStrictEqual(expectedResult);
  });
});

describe('Seeker tests', () => {
  const props = {
    matrix: [
      [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
      [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
      [CellType.blank, CellType.blank, CellType.player, CellType.blank, CellType.blank],
      [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
      [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
    ],
    seekerCurrentPos: {
      x: 1,
      y: 1,
    },
    seekerLastMove: {
      vector: 'x',
      incr: 1,
    },
    size: 5,
  };

  it('verify seeker got a position to move with 4 possible moves', () => {
      const move = seekerMove(props.seekerLastMove, props.seekerCurrentPos, props.matrix, props.size);

      expect(move.incr).not.toBeUndefined();
      expect(move.vector).not.toBeUndefined();
  });

  it('verify seeker got a position to move with 3 possible moves', () => {
    const testProps = {
      ...props,
      seekerCurrentPos: {
        x: 2,
        y: 0,
      }
    };

    const move = seekerMove(testProps.seekerLastMove, testProps.seekerCurrentPos, testProps.matrix, testProps.size);

    expect(move.incr).not.toBeUndefined();
    expect(move.vector).not.toBeUndefined();
  });

  it('verify seeker got a position to move with 2 possible moves', () => {
    const testProps = {
      ...props,
      seekerCurrentPos: {
        x: props.size - 1,
        y: props.size - 1,
      }
    };

    const move = seekerMove(testProps.seekerLastMove, testProps.seekerCurrentPos, testProps.matrix, testProps.size);

    expect(move.incr).not.toBeUndefined();
    expect(move.vector).not.toBeUndefined();
  });

  it('verify seeker got a position to move with 2 possible moves', () => {
    const testProps = {
      ...props,
      seekerCurrentPos: {
        x: props.size - 1,
        y: props.size - 1,
      }
    };

    const move = seekerMove(testProps.seekerLastMove, testProps.seekerCurrentPos, testProps.matrix, testProps.size);

    expect(move.incr).not.toBeUndefined();
    expect(move.vector).not.toBeUndefined();
  });

  describe('Index tests', () => {
    it('choose an image if I lose', () => {
      const image = chooseImage(GameStatus.defeat);

      expect(image).toStrictEqual('lose.jpg');
    });

    it('choose an image if I win', () => {
      const image = chooseImage(GameStatus.victory);

      expect(image).toStrictEqual('win.jpg');
    });
  })
});
