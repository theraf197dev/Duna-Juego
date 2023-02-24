import { Component } from "react";
import PropTypes from 'prop-types';
import {
    CellType,
    GameMode,
    GameStatus,
} from '../../common/utils';
import View from './View.jsx';

export default class Controller extends Component {
    componentDidUpdate(prevProps) {
        if(prevProps.currentPos !== this.props.currentPos) {
            this.props.setMatrix(CellType.duna, this.props.currentPos);
        }

        if(prevProps.seekerCurrentPos !== this.props.seekerCurrentPos) {
            this.props.setMatrix(CellType.seeker, this.props.seekerCurrentPos);
        }

        if(this.props.gameStatus !== GameStatus.playing && this.props.mode === GameMode.seeker) {
            this.props.stopInterval();
        }

        if(this.props.pizzas <= 0 && prevProps.pizzas !== this.props.pizzas) {
            this.props.endGame(GameStatus.victory);
        }
    }

    render() {
        return (
            <View
                {...this.props}
            />
        )
    }
};

Controller.propTypes = {
    controls: PropTypes.array,
    currentPos: PropTypes.object,
    endGame: PropTypes.func,
    gameStatus: PropTypes.string,
    restartGame: PropTypes.func,
    lastInput: PropTypes.object,
    matrix: PropTypes.array,
    mode: PropTypes.string,
    pizzas: PropTypes.number,
    seekerCurrentPos: PropTypes.object,
    setCurrentPos: PropTypes.func,
    size: PropTypes.number,
    time: PropTypes.number,
};

Controller.displayName = 'ControllerGame';
