import React, { Component }  from "react";
import Controller from "./Controller";

export default class Model extends Component {
    constructor(props) {
        super(props);
        this.state = {
            difficulty: props.difficulty,
            isGameAlive: false,
            mode: props.mode,
        };
        this.bindActions();
    };

    bindActions() {
        this.setGame = this.setGame.bind(this);
        this.startGame = this.startGame.bind(this);
    }

    startGame(difficulty, mode) {
        this.setState({
            difficulty,
            isGameAlive: true,
            mode,
        });
    }

    setGame(value) {
        this.setState({
            isGameAlive: value,
        });
    }

    render() {
        return (
            <Controller
                {...this.props}
                {...this.state}
                setGame={this.setGame}
                startGame={this.startGame}
            />
        )
    };
}

Model.displayName = 'ModelMenu';
