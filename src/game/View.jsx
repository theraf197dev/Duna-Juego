import React from 'react';
import {
    CellStyles,
    ContainerStyles,
    ImageStyles,
    TableStyles,
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
    controls,
    currentPos,
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