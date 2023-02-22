import { canMove } from "../../../common/utils";

const chooseMove = (filteredMoves) => {
    const random = Math.floor(Math.random() * 100);
    const portions = 100 / filteredMoves.length;

    return Math.floor(random/portions);
};

const filterGoBack = (possibleMoves, seekerLastMove) => {
    return possibleMoves.filter(({vector, incr}) =>
        vector !== seekerLastMove.vector ||
        (vector === seekerLastMove.vector && incr === seekerLastMove.incr)
    );
};

const TryMove = (possibleMoves, seekerCurrentPos, matrix, size, vector, incr) => {
    if(canMove(matrix, seekerCurrentPos, vector, incr, size)){
        possibleMoves.push({
            incr,
            vector,
        });
    }
};

const seekerMove = (seekerLastMove, seekerCurrentPos, matrix, size) => {
    let possibleMoves = [];

    for (let index = -1; index < 2; index += 2) {
        TryMove(possibleMoves,seekerCurrentPos, matrix, size, 'x', index);
        TryMove(possibleMoves,seekerCurrentPos, matrix, size, 'y', index);
    }

    const filteredMoves = filterGoBack(possibleMoves, seekerLastMove);

    const index = chooseMove(filteredMoves);

    return filteredMoves[index];
};

export default seekerMove;