import React from 'react';
import {
  ButtonStyles,
  CircleStyles,
  ContainerStyles,
  CrossStyles,
  FigureStyles,
} from './View.styles.jsx';
import { canMove, GameStatus } from '../../common/utils.js';

const View = ({
    controls,
    currentPos,
    gameStatus,
    handleChangePosition,
    matrix,
    size,
}) => {
  return (
    <ContainerStyles>
      {controls.map((control) =>
        <ButtonStyles
          control={control}
          disabled={
            !canMove(matrix, currentPos, control.vector, control.incr, size)
            || gameStatus !== GameStatus.playing
          }
          key={control.id}
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