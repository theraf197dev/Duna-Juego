import { Component } from "react";
import {
    CellType,
    GameMode,
    GameStatus,
} from '../../common/utils';
import View from './View.jsx';

export default class Controller extends Component {
    componentDidUpdate(prevProps) {
        if(prevProps.currentPos !== this.props.currentPos) {
            this.props.setMatrix(CellType.duna);
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
                endGame={this.props.endGame}
                setCurrentPos={this.props.setCurrentPos}
            />
        )
    }
};

Controller.displayName = 'ControllerGame';
