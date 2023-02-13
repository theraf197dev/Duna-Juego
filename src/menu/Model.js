import React, { Component }  from "react";
import Controller from "./Controller";

export default class Model extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGameAlive: false,
        };
        this.bindActions();
    };

    bindActions() {
        this.setGame = this.setGame.bind(this);
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
            />
        )
    };
}

