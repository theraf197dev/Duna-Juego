import React from 'react';
import {
    CellStyles,
    ContainerStyles,
    ImageStyles,
    TableStyles,
} from './View.styles.jsx';
import {
    CellType,
    ImageCarousel,
} from '../common/utils';
import Controls from '../controls/Controller';
import { chooseImage } from './helper/props.js';
import Modal from '../styled-components/components/Modal.jsx';

const EndModal = ({ gameStatus, restartGame }) => (
    <Modal
        buttonText='RETRY?'
        handleSubmit={restartGame}
        image={chooseImage(gameStatus)}
        title={gameStatus.toUpperCase()}
    />
);

const Row = ({ row, lastInput }) => {
    return row.map((cell, index) => <CellStyles key={index}><ImageStyles src={ImageCarousel(cell)} lastInput={lastInput} player={cell === CellType.duna} /></CellStyles> );
};

const Game = ({
    controls,
    currentPos,
    gameStatus,
    restartGame,
    lastInput,
    matrix,
    setCurrentPos,
    setLastInput,
    size,
}) => {
    return (
        <>
            {matrix ?
                (<>
                    {gameStatus !== 'playing' ?
                        <EndModal gameStatus={gameStatus} restartGame={restartGame} />
                        : null
                    }
                    <ContainerStyles>
                        <TableStyles>
                            {matrix.map((row, index) => <tr key={index}><Row row={row} key={index} lastInput={lastInput} /></tr>)}
                        </TableStyles>
                        <Controls
                            controls={controls}
                            currentPos={currentPos}
                            matrix={matrix}
                            setCurrentPos={setCurrentPos}
                            setLastInput={setLastInput}
                            size={size}
                        />
                    </ContainerStyles>
                </>) :
                null
            }
        </>
    );
}

export default Game;