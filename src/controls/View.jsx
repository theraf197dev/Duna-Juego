import React from 'react';
import {
  ButtonStyles,
  ContainerStyles,
  CircleStyles,
  CrossStyles,
  FigureStyles,
} from './View.styles.jsx';
import { canMove } from '../common/utils.js';

const View = ({
    controls,
    currentPos,
    handleChangePosition,
    matrix,
    size,
}) => {
  return (
    <ContainerStyles>
      {controls.map((control) =>
        <ButtonStyles
          control={control}
          key={control.id}
          disabled={!canMove(matrix, currentPos, control.vector, control.incr, size)}
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