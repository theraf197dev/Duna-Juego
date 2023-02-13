import React from 'react';
import Game from '../game/Model';

const Menu = ({
    controls,
    mode,
    setGame,
    size,
    isGameAlive,
    initGame,
    board,
}) => {
    return (
        <>
            {isGameAlive ?
                <Game
                    size={size}
                    controls={controls}
                    mode={mode}
                    setGame={setGame}
                    board={board}
                />
                :
                <button onClick={() => initGame()}>Play</button>
            }
        </>
    );
}

export default Menu;