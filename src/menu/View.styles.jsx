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
        height: 300px;
        width: 500px;
    `}
`;

const ToggleStyles = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: flex-start;
    justify-content: center;

    label {
        padding-right: 10px;
        font-size: 20px;
        user-select: none;
    }
`;

const GameStyles = styled.div`
    height: 300px;
    width: 500px;
    margin: 10px;
    background: linear-gradient(to left top, #c32c71 50%, #b33771 50%);
    border-style: none;
    color:#fff;
    font-size: 23px;
    letter-spacing: 3px;
    font-family: 'Lato';
    font-weight: 600;
    outline: none;
    position: relative;
    padding: 0px;
    overflow: hidden;
    transition: all .5s;
    index: 1;
    box-shadow: 0px 1px 2px rgba(0,0,0,.2);

    &:hover {
        transform: scale(1.1);
    }
`;

const SpanStyles = styled.span`
    ${({ id, selected, name }) => css`
        position: absolute;
        display: block;

        ${selected === name && css`
            ${id === 1 && css`
                height: 3px;
                width: 200px;
                top: 0px;
                left: -200px;
                background: linear-gradient(to right, rgba(0,0,0,0), #f6e58d);
                border-top-right-radius: 1px;
                border-bottom-right-radius: 1px;
                animation: span1 1.1s linear infinite;
                animation-delay: .5s;

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
                height: 70px;
                width: 3px;
                top:-70px;
                right:0px;
                background: linear-gradient(to bottom, rgba(0,0,0,0), #f6e58d);
                border-bottom-left-radius: 1px;
                border-bottom-right-radius: 1px;
                animation: span2 1.1s linear infinite;
                animation-delay: 1.5s;

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
                height:3px;
                width:200px;
                right:-200px;
                bottom: 0px;
                background: linear-gradient(to left, rgba(0,0,0,0), #f6e58d);
                border-top-left-radius: 1px;
                border-bottom-left-radius: 1px;
                animation: span3 1.1s linear infinite;
                animation-delay: 2.5s;

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
                height:70px;
                width:3px;
                bottom:-70px;
                left:0px;
                background: linear-gradient(to top, rgba(0,0,0,0), #f6e58d);
                border-top-right-radius: 1px;
                border-top-left-radius: 1px;
                animation: span4 1.1s linear infinite;
                animation-delay: 3.5s;

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
