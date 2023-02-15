import { Component } from "react";
import View from './View.jsx';

export default class Controller extends Component {
    constructor(props) {
        super(props);
        this.bindActions();
    };

    bindActions() {
        this.initGame = this.initGame.bind(this);
    }

    initGame() {
        this.props.startGame(this.props.difficulty, this.props.mode);
    }

    render() {
        return (
            <View
                {...this.props}
                initGame={this.initGame}
            />
        )
    }
}

Controller.displayName = 'ControllerMenu';
