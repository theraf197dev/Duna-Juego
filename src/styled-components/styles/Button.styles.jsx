import styled, { css } from "styled-components";

const ContainerButtonStyles = styled.div`
    padding: 20px;
`;

const ButtonStyles = styled.button`
    background: linear-gradient(to left top, #c32c71 50%, #b33771 50%);
    border-style: none;
    box-shadow: 0px 1px 2px rgba(0,0,0,.2);
    color:#fff;
    cursor: pointer;
    font-family: 'Lato';
    font-size: 23px;
    font-weight: 600;
    height: 70px;
    letter-spacing: 3px;
    outline: none;
    overflow: hidden;
    padding: 0px;
    position: relative;
    transition: all .5s;
    width: 200px;

    &:hover{
        backgorund-color: red;
        box-shadow: 0px 3px 5px rgba(0,0,0,.4);
        transform: rotate(-3deg) scale(1.1);
        transition: all .5s;

        span {
            animation-play-state: paused;
        }
    }
`;

const SpanStyles = styled.span`
    ${({ id }) => css`
        display: block;
        position: absolute;

        ${id === 1 && css`
            animation-delay: .5s;
            animation: span1 2s linear infinite;
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
                    left:200px;
                }
            }
        `}

        ${id === 2 && css`
            animation-delay: 1.5s;
            animation: span2 2s linear infinite;
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
                    top:70px;
                }
            }
        `}

        ${id === 3 && css`
            animation-delay: 2.5s;
            animation: span3 2s linear infinite;
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
                    right: 200px;
                }
            }
        `}

        ${id === 4 && css`
            animation-delay: 3.5s;
            animation: span4 2s linear infinite;
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
                    bottom:70px;
                }
            }
        `}
    `}
`;

export {
    ButtonStyles,
    ContainerButtonStyles,
    SpanStyles,
};