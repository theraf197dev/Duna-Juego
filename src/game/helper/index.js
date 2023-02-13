import { CellType } from "../../common/utils";

const setBoard = (board, value, x, y) => {
    board[x][y] = value;
};

const createFreeBoardPositions = (board) => {
    let freeBoard = [];
    for (const x in board) {
        for (const y in board[x]) {
            if(board[x][y] === CellType.blank){
                freeBoard.push({x, y});
            }
        }
    }

    return freeBoard;
};

const setThing = (board, freePositions, value) => {
    const random = Math.floor(Math.random() * freePositions.length);
    const x = freePositions[random].x;
    const y = freePositions[random].y;

    freePositions.splice(random, 1);

    setBoard(board, value, x, y);
};

const setInitBoard = (currentPos, size) => {
    const pizzas = (size + size) / 2;
    const obstacles = size - 1;

    let board = Array.from({length: size}, ()=> Array.from({length: size}, () => CellType.blank));
    setBoard(board, CellType.duna, currentPos.x, currentPos.y);

    let freePositions = createFreeBoardPositions(board);

    for (let index = 0; index < pizzas; index++) {
        setThing(board, freePositions, CellType.pizza);
    }

    for (let index = 0; index < obstacles; index++) {
        setThing(board, freePositions, CellType.obstacle);
    }

    return board;
};

export default setInitBoard;