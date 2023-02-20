import styled from "styled-components";

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
    }
`;

export {
    ButtonStyles,
    ContainerButtonStyles,
};