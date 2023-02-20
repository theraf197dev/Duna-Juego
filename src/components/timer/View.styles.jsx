import styled, { css } from "styled-components";

const ContainerStyles = styled.div`
    ${({ seconds }) => css`
        border-radius: 25px;
        border: 3px solid black;
        padding: 15px;
        font-size: 25px;
        user-select: none;
        width: fit-content;

        ${seconds < 5 && css`
            animation: lastSeconds 1s ease-out infinite;
            background-color: red;

            @keyframes lastSeconds {
                0%{
                    opacity: 100%;
                }
                100%{
                    opacity: 0%;
                }
            }
        `}
    `}
`;

export {
    ContainerStyles,
};
