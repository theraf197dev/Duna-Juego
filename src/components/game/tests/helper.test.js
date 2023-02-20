import { CellType, GameMode } from "../../../common/utils";
import {
    setInitBoard,
    setBoard,
} from "../helper";

describe('Helper tests', () => {
    it('verify board modify its value based on props (setBoard)', () => {
        const props = {
            board: [
                [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
                [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
                [CellType.blank, CellType.blank, CellType.duna, CellType.blank, CellType.blank],
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
                  'duna',  'pizza',
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
