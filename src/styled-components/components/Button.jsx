import React from 'react';
import {
    ButtonStyles,
    ContainerButtonStyles,
    SpanStyles,
} from '../styles/Button.styles';

const Button = ({
    buttonText,
    handleSubmit,
}) => {
  return (
    <ContainerButtonStyles>
        <ButtonStyles onClick={handleSubmit}>
            {buttonText}
            <SpanStyles id={1} />
            <SpanStyles id={2} />
            <SpanStyles id={3} />
            <SpanStyles id={4} />
        </ButtonStyles>
    </ContainerButtonStyles>
  )
}

export default Button