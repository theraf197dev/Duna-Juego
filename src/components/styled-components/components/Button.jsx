import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
  buttonText: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;