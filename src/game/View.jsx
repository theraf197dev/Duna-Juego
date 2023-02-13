import React from 'react';
import {
    TableStyles,
    CellStyles,
    ImageStyles,
} from './View.styles.jsx';
import {
    CellType,
} from '../common/utils';
import {
    ImageCarousel,
} from '../common/utils';
import Controls from '../controls/Controller';

const Row = ({ row, lastInput }) => {
    return row.map((cell, index) => <CellStyles key={index}><ImageStyles src={ImageCarousel(cell)} lastInput={lastInput} player={cell === CellType.duna} /></CellStyles> );
};

const Game = ({
    matrix,
    currentPos,
    setCurrentPos,
    setLastInput,
    lastInput,
    size,
    controls,
}) => {
    return (
        <>
            {matrix ?
                (<>
                    <span>
                        <h1>DUNA JUEGO</h1>
                        <h2>Atrapa la pizzita</h2>
                    </span>
                    <TableStyles>
                        {matrix.map((row, index) => <tr key={index}><Row row={row} key={index} lastInput={lastInput} /></tr>)}
                    </TableStyles>
                    <Controls
                        matrix={matrix}
                        currentPos={currentPos}
                        setCurrentPos={setCurrentPos}
                        setLastInput={setLastInput}
                        size={size}
                        controls={controls}
                    />
                </>) :
                null
            }
        </>
    );
}

export default Game;