import styled from "styled-components";

const ContainerModalStyles = styled.div`
    align-items: center;
    background: #ffffff;
    border: 1px solid black;
    border-radius: 0.5em;
    box-shadow: 0 10px 20px rgba(black, 0.2);
    display: flex;
    flex-direction: column;
    left: 50%;
    max-height: 90vh;
    max-width: 90%;
    pointer-events: none;
    position: absolute;
    text-align: left;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 30em;
    z-index: 1;
`;

const ModalTitleStyles = styled.div`
    color: #111827;
    pointer-events: all;
    position: relative;
    text-align: center;
    width: calc(100% - 4.5em);

    h1 {
        font-weight: 600;
        line-height: normal;
    }
`;

const ModalContentStyles = styled.div`
    border-top: 1px solid #e0e0e0;
    overflow: auto;
    padding: 2em;
    pointer-events: all;
    text-align: center;
`;

const ImageStyles = styled.img`
    height: 325px;
    width: 350px;
`;

export {
    ContainerModalStyles,
    ModalTitleStyles,
    ModalContentStyles,
    ImageStyles,
};