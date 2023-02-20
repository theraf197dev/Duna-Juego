import React from 'react';
import {
    ButtonStyles,
    ContainerButtonStyles,
} from '../styles/Button.styles';

const Button = ({
    buttonText,
    handleClick,
}) => {
  return (
    <ContainerButtonStyles>
        <ButtonStyles onClick={handleClick}>
            {buttonText}
        </ButtonStyles>
    </ContainerButtonStyles>
  )
};

export default Button;