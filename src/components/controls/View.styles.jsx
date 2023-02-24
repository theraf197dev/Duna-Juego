import styled, { css } from "styled-components";

const ContainerStyles = styled.div`
    display: grid;
    grid-template-columns: 70px 70px 70px;
    justify-content: center;
    padding: 30px;
`;

const ButtonStyles = styled.button`
    ${({canActivate, control}) => css`
        background-color: #333333;
        border: none;
        cursor: ${canActivate ? 'pointer': 'default'};
        display: flex;
        height: 70px;
        justify-content: center;
        width: 70px;

        ${control.vector === 'y' && css`
            border-radius: ${control.incr === -1 ? '15% 0 0 15%' : '0 15% 15% 0'};
            grid-column: ${control.incr === -1 ? 1 : 3};
            grid-row: 2;
            justify-self: ${control.incr === -1 ? 'self-end' : 'self-start'};
        `}

        ${control.vector === 'x' && css`
            border-radius: ${control.incr === -1 ? '15% 15% 0 0' : '0 0 15% 15%'};
            grid-column: 2;
            grid-row: ${control.incr === -1 ? 1 : 3};
        `}

        ${canActivate && css`
            &:active {
                background-color: #a51631;
            }
        `}
    `}
`;

const FigureStyles = styled.div`
    ${({control}) => css`
        background-color: #1e1e1e;
        height: 35px;
        place-self: center;
        width: 35px;

        ${control.vector === 'y' && css`
            border-radius: ${control.incr === -1 ? '25% 0 0 25%' : '0 25% 25% 0'};
        `}

        ${control.vector === 'x' && css`
            border-radius: ${control.incr === -1 ? '25% 25% 0 0' : '0 0 25% 25%'};
        `}
    `};
`;

const CircleStyles = styled.div`
    ${({ canActivate }) => css`
        background-color: #1e1e1e;
        border-radius: 100%;
        cursor: ${canActivate ? 'pointer': 'default'};
        height: 55px;
        place-self: center;
        width: 55px;

        ${canActivate && css`
            &:active {
                background-color: #a51631;
            }
        `}
    `};
`;

const CrossStyles = styled.div`
    background-color: #333333;
    display: flex;
    grid-column: 2;
    grid-row: 2;
    height: 100%;
    justify-content: space-around;
    place-self: center;
    width: 100%;
`;

export {
    ButtonStyles,
    CircleStyles,
    ContainerStyles,
    CrossStyles,
    FigureStyles,
};