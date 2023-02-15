import React from 'react';
import {
    ContainerButtonStyles,
    ButtonStyles,
    SpanStyles,
} from '../styles/Button.styles';

const Button = ({
    handleSubmit,
    buttonText,
}) => {
  return (
    <ContainerButtonStyles>
        <ButtonStyles onSubmit={handleSubmit}>
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