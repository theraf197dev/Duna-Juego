import React from 'react';
import {
    CellStyles,
    ContainerStyles,
    ImageStyles,
    TableStyles,
    WrapperGameStyles,
} from './View.styles.jsx';
import {
    CellType,
    GameMode,
    GameStatus,
    ImageCarousel,
} from '../../common/utils';
import Controls from '../controls/Controller';
import { chooseImage } from './helper/props.js';
import Modal from '../styled-components/components/Modal.jsx';
import Timer from '../timer/View.jsx';

const EndModal = ({ gameStatus, restartGame }) => (
    <Modal
        buttonText='RETRY?'
        handleClick={restartGame}
        image={chooseImage(gameStatus)}
        title={gameStatus.toUpperCase()}
    />
);

const Row = ({ row, lastInput }) => {
    return row.map((cell, index) => <CellStyles key={index}><ImageStyles
        src={ImageCarousel(cell)}
        lastInput={lastInput}
        player={cell === CellType.duna}
    />
    </CellStyles>);
};

const Game = ({
    controls,
    currentPos,
    endGame,
    gameStatus,
    restartGame,
    lastInput,
    matrix,
    mode,
    setCurrentPos,
    setLastInput,
    size,
    time,
}) => {
    return (
        <>
            {matrix ?
                (<WrapperGameStyles>
                    {gameStatus !== GameStatus.playing &&
                        <EndModal gameStatus={gameStatus} restartGame={restartGame} />
                    }

                    {mode === GameMode.trial && <Timer
                            stopTimer={gameStatus !== GameStatus.playing}
                            handleEndOfTimer={() => endGame(GameStatus.defeat)}
                            time={time}
                        />
                    }
                    <ContainerStyles>
                        <TableStyles>
                            {matrix.map((row, index) => <tr key={index}><Row row={row} key={index} lastInput={lastInput} /></tr>)}
                        </TableStyles>
                        <Controls
                            controls={controls}
                            currentPos={currentPos}
                            gameStatus={gameStatus}
                            matrix={matrix}
                            setCurrentPos={setCurrentPos}
                            setLastInput={setLastInput}
                            size={size}
                        />
                    </ContainerStyles>
                </WrapperGameStyles>) :
                null
            }
        </>
    );
}

export default Game;