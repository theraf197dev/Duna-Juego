import styled, { css } from "styled-components";

const ContainerToogleStyles = styled.div`
    padding: 50px;
    position: relative;
    user-select: none;
`;

const ToogleStyles = styled.input`
    display: none;
`;

const ToogleLabelStyles = styled.label`
    ${({ isChecked }) => css`
        background-color: ${isChecked ? '#000' : '#77b5fe'};
        border-radius: 56px;
        cursor: pointer;
        display: block;
        height: 56px;
        left: 0;
        margin: 0 auto;
        overflow: hidden;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: 0.3s ease background-color;
        width: 116px;
    `}
`;

const ToogleStarStyles = styled.div`
    ${({ isChecked }) => css`
        background-color: #fafd0f;
        border-radius: 50%;
        height: 30px;
        left: 13px;
        position: absolute;
        top: 13px;
        transform: scale(1);
        transition: 0.3s ease top, 0.3s ease left, 0.3s ease transform, 0.3s ease background-color;
        width: 30px;
        z-index: 1;

        ${ isChecked && css`
            background-color: yellow;
            left: 64px;
            top: 3px;
            transform: scale(0.3);
        `}
    `}
`;

const StarStyles = css`
    ${({ isChecked }) => css`
        color: ${isChecked ? 'yellow' : '#fafd0f'};
        font-size: 54px;
        line-height: 28px;
        transition: 0.3s ease color;
    `}
`;

const ToogleFirstStarStyles = styled.div`
    ${StarStyles};
    left: -6px;
    position: relative;
    top: -4px;
`;

const ToogleSecondStarStyles = styled.div`
    ${StarStyles};
    left: -4px;
    position: absolute;
    top: -4px;
    transform: rotateZ(36deg);
`;

const ToogleMoonStyles = styled.div`
    ${({ isChecked }) => css`
        background-color: #fff;
        border-radius: 50%;
        bottom: ${isChecked ? '8px' : '-52px'};
        height: 40px;
        position: absolute;
        right: 8px;
        transition: 0.3s ease bottom;
        width: 40px;

        &:before {
            background-color: ${isChecked ? '#000' : '#03a9f4'};
            border-radius: 50%;
            content: "";
            height: 40px;
            left: -17px;
            position: absolute;
            top: -12px;
            transition: 0.3s ease background-color;
            width: 40px;
        }
    `}
`;

export {
    ContainerToogleStyles,
    ToogleFirstStarStyles,
    ToogleLabelStyles,
    ToogleMoonStyles,
    ToogleSecondStarStyles,
    ToogleStarStyles,
    ToogleStyles,
};