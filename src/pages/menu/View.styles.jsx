import styled, { css } from "styled-components";

const ContainerStyles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 20px;
`;

const ImageStyles = styled.img`
    ${({ url }) => css`
        background-image: url(${url});
        cursor: pointer;
        height: 300px;
        width: 500px;
    `}
`;

const ToggleStyles = styled.div`
    align-content: flex-start;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;

    label {
        font-size: 20px;
        padding-right: 10px;
        user-select: none;
    }
`;

const GameStyles = styled.div`
    background: linear-gradient(to left top, #c32c71 50%, #b33771 50%);
    border-style: none;
    box-shadow: 0px 1px 2px rgba(0,0,0,.2);
    color:#fff;
    font-family: 'Lato';
    font-size: 23px;
    font-weight: 600;
    height: 300px;
    index: 1;
    letter-spacing: 3px;
    margin: 10px;
    outline: none;
    overflow: hidden;
    padding: 0px;
    position: relative;
    transition: all .5s;
    width: 500px;

    &:hover {
        transform: scale(1.1);
    }
`;

const SpanStyles = styled.span`
    ${({ id, selected, name }) => css`
        display: block;
        position: absolute;

        ${selected === name && css`
            ${id === 1 && css`
                animation-delay: .5s;
                animation: span1 1.1s linear infinite;
                background: linear-gradient(to right, rgba(0,0,0,0), #f6e58d);
                border-bottom-right-radius: 1px;
                border-top-right-radius: 1px;
                height: 3px;
                left: -200px;
                top: 0px;
                width: 200px;

                @keyframes span1{
                    0%{
                        left:-200px
                    }
                    100%{
                        left:340px;
                    }
                }
            `}

            ${id === 2 && css`
                animation-delay: 1.5s;
                animation: span2 1.1s linear infinite;
                background: linear-gradient(to bottom, rgba(0,0,0,0), #f6e58d);
                border-bottom-left-radius: 1px;
                border-bottom-right-radius: 1px;
                height: 70px;
                right: 0px;
                top: -70px;
                width: 3px;

                @keyframes span2{
                    0%{
                        top:-70px;
                    }
                    100%{
                        top:250px;
                    }
                }
            `}

            ${id === 3 && css`
                animation-delay: 2.5s;
                animation: span3 1.1s linear infinite;
                background: linear-gradient(to left, rgba(0,0,0,0), #f6e58d);
                border-bottom-left-radius: 1px;
                border-top-left-radius: 1px;
                bottom: 0px;
                height: 3px;
                right: -200px;
                width: 200px;

                @keyframes span3{
                    0%{
                        right:-200px;
                    }
                    100%{
                        right: 340px;
                    }
                }
            `}

            ${id === 4 && css`
                animation-delay: 3.5s;
                animation: span4 1.1s linear infinite;
                background: linear-gradient(to top, rgba(0,0,0,0), #f6e58d);
                border-top-left-radius: 1px;
                border-top-right-radius: 1px;
                bottom: -70px;
                height: 70px;
                left: 0px;
                width: 3px;

                @keyframes span4{
                    0%{
                        bottom: -70px;
                    }
                    100%{
                        bottom:250px;
                    }
                }
            `}
        `}
    `}
`;

export {
    ContainerStyles,
    ImageStyles,
    GameStyles,
    SpanStyles,
    ToggleStyles,
};
