import styled, { css } from "styled-components";

const WrapperGameStyles = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const ContainerStyles = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;

const TableStyles = styled.div`
    display: grid;
    gap: 5px;
    padding: 10px;
`;

const RowStyles = styled.div`
    display: inline-flex;
`;

const CellStyles = styled.div`
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
    CellStyles,
    ContainerStyles,
    ImageStyles,
    RowStyles,
    TableStyles,
    WrapperGameStyles,
};
