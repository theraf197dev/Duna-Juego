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

const obstaclesCondition = (board, vector, difficulty = 1) => {
    switch (difficulty) {
        case 1:
            return false;
        case 2:
            return vector%2 !== 0 && vector !== 0 && (vector !== board.length - 1);
        default:
            return false;
    }
};

const seekerMode = (board, currentPos, size, difficulty) => {
    board = Array.from({length: size}, ()=> Array.from({length: size}, () => CellType.pizza));
    board.map((col, x) => obstaclesCondition(board, x, difficulty) ?
        col.map((cell, y) => obstaclesCondition(board, y, difficulty) ? CellType.obstacle : cell)
        : col
    );

    setBoard(board, CellType.duna, currentPos.x, currentPos.y);
    setBoard(board, CellType.seeker, 0, 0);

    return board;
};

const trialMode = (board, currentPos, size, difficulty) => {
    const pizzas = (size + size) / 2;
    const obstacles = size - 1;

    board = Array.from({length: size}, ()=> Array.from({length: size}, () => CellType.blank));
    setBoard(board, CellType.duna, currentPos.x, currentPos.y);

    let freePositions = createFreeBoardPositions(board);

    for (let index = 0; index < pizzas; index++) {
        setThing(board, freePositions, CellType.pizza);
    }

    if(difficulty === 2){
        for (let index = 0; index < obstacles; index++) {
            setThing(board, freePositions, CellType.obstacle);
        }
    }

    return board;
};

const setInitBoard = (size, mode, difficulty) => {
    let board;
    const currentPos = {
        x: Math.floor((size - 1) / 2),
        y: Math.floor((size - 1) / 2),
    };

    switch (mode) {
        case 'trial':
            board = trialMode(board, currentPos, size, difficulty);
            break;
        case 'seeker':
            board = seekerMode(board, currentPos, size, difficulty);
            break;
        default:
            board = trialMode(board, currentPos, size, difficulty);
    }

    return board;
};

export default setInitBoard;