import React from 'react';
import {
  ButtonStyles,
  ContainerStyles,
  CircleStyles,
  CrossStyles,
  FigureStyles,
} from './View.styles.jsx';

const View = ({
    canMove,
    handleChangePosition,
    controls,
}) => {
  return (
    <ContainerStyles>
      {controls.map((control) =>
        <ButtonStyles
          control={control}
          key={control.id}
          disabled={!canMove(control.vector, control.incr)}
          onClick={() => handleChangePosition(control.vector, control.incr)}
        >
          <FigureStyles control={control} />
        </ButtonStyles>
      )}
      <CrossStyles>
        <CircleStyles onClick={() => console.log('bark')} />
      </CrossStyles>
    </ContainerStyles>
  )
}

export default View