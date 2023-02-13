import styled, { css } from "styled-components";

const TableStyles = styled.div`
    display: grid;
    gap: 5px;
    padding: 10px;
`;

const CellStyles = styled.td`
    padding: 5px;
    width: 50px;
`;

const ImageStyles = styled.img`
    border-radius: 5px;
    height: 50px;
    width: 50px;
    ${({ lastInput, player }) => css`
        ${player && css`
            rotate: ${lastInput.incr === 1 ? '270deg' :'90deg'};

            ${lastInput.vector === 'y' && css`
                rotate: 0deg;
                transform: scaleX(${(lastInput.incr === 1) ? -1 : 1});
            `}

            ${lastInput.vector === 'x' && css`
                transform: scaleY(${(lastInput.incr === 1) ? -1 : 1});
            `}
        `}
    `};
`;

export {
    TableStyles,
    CellStyles,
    ImageStyles,
};
