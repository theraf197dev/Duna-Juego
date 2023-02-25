import React from 'react';
import PropTypes from 'prop-types';
import {
    CellStyles,
    ContainerStyles,
    ImageStyles,
    RowStyles,
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
    return row.map((cell, index) => <CellStyles data-testid={`fn-cell-${cell}`} key={index}><ImageStyles
        lastInput={lastInput}
        player={cell === CellType.player}
        src={ImageCarousel(cell)}
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
                            {matrix.map((row, index) => <RowStyles key={index}><Row row={row} key={index} lastInput={lastInput} /></RowStyles>)}
                        </TableStyles>
                        <Controls
                            controls={controls}
                            currentPos={currentPos}
                            gameStatus={gameStatus}
                            matrix={matrix}
                            setCurrentPos={setCurrentPos}
                            size={size}
                        />
                    </ContainerStyles>
                </WrapperGameStyles>) :
                null
            }
        </>
    );
};

Game.propTypes = {
    controls: PropTypes.array,
    currentPos: PropTypes.object,
    endGame: PropTypes.func,
    gameStatus: PropTypes.string,
    restartGame: PropTypes.func,
    lastInput: PropTypes.object,
    matrix: PropTypes.array,
    mode: PropTypes.string,
    setCurrentPos: PropTypes.func,
    size: PropTypes.number,
    time: PropTypes.number,
};

export default Game;
