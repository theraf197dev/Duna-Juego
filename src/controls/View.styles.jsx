import styled, { css } from "styled-components";

const ContainerStyles = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 70px 70px 70px;
    padding: 10px;
`;

const ButtonStyles = styled.button`
    ${({control}) => css`
        background-color: #333333;
        width: 70px;
        height: 70px;
        border: none;
        display: flex;
        justify-content: center;

        ${control.vector === 'y' && css`
            grid-row: 2;
            grid-column: ${control.incr === -1 ? 1 : 3};
            justify-self: ${control.incr === -1 ? 'self-end' : 'self-start'};
            border-radius: ${control.incr === -1 ? '15% 0 0 15%' : '0 15% 15% 0'};
        `}

        ${control.vector === 'x' && css`
            grid-row: ${control.incr === -1 ? 1 : 3};
            grid-column: 2;
            border-radius: ${control.incr === -1 ? '15% 15% 0 0' : '0 0 15% 15%'};
        `}
    `}
`;

const FigureStyles = styled.div`
    ${({control}) => css`
        background-color: #1e1e1e;
        width: 35px;
        height: 35px;
        place-self: center;

        ${control.vector === 'y' && css`
            border-radius: ${control.incr === -1 ? '25% 0 0 25%' : '0 25% 25% 0'};
        `}

        ${control.vector === 'x' && css`
            border-radius: ${control.incr === -1 ? '25% 25% 0 0' : '0 0 25% 25%'};
        `}
    `};
`;

const CircleStyles = styled.div`
    background-color: #1e1e1e;
    width: 55px;
    height: 55px;
    border-radius: 100%;
    place-self: center;
`;

const CrossStyles = styled.div`
    background-color: #333333;
    width: 100%;
    height: 100%;
    grid-row: 2;
    grid-column: 2;
    display: flex;
    place-self: center;
    justify-content: space-around;
`;

export {
    ContainerStyles,
    ButtonStyles,
    CircleStyles,
    CrossStyles,
    FigureStyles,
};