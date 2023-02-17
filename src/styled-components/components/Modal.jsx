import React from 'react';
import {
    ContainerModalStyles,
    ModalTitleStyles,
    ModalContentStyles,
    ImageStyles,
} from '../styles/Modal.styles.jsx';
import Button from './Button.jsx';

const Modal = ({
    buttonText,
    handleSubmit,
    image,
    title,
}) => {
  return (
    <ContainerModalStyles>
        <ModalTitleStyles>
            <h1>{title}</h1>
        </ModalTitleStyles>
        <ModalContentStyles>
            <ImageStyles src={image} alt='' />
            <Button buttonText={buttonText} handleSubmit={handleSubmit} />
        </ModalContentStyles>
    </ContainerModalStyles>
  );
};

Modal.propTypes = {}

export default Modal;