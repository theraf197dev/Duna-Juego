import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonStyles,
  CircleStyles,
  ContainerStyles,
  CrossStyles,
  FigureStyles,
} from './View.styles.jsx';
import { canMove, GameStatus } from '../../common/utils.js';

const Controls = ({
    controls,
    currentPos,
    gameStatus,
    handleBark,
    handleChangePosition,
    matrix,
    size,
}) => {
  return (
    <ContainerStyles>
      {controls.map((control) =>
        <ButtonStyles
          control={control}
          data-testid={`fn-controls-button-${control.name}`}
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
        <CircleStyles data-testid={'fn-controls-bark'} onClick={handleBark} />
      </CrossStyles>
    </ContainerStyles>
  );
};

Controls.propTypes = {
  controls: PropTypes.array,
  currentPos: PropTypes.object,
  gameStatus: PropTypes.string,
  handleBark: PropTypes.func,
  handleChangePosition: PropTypes.func,
  matrix: PropTypes.array,
  size: PropTypes.number,
};

export default Controls;
