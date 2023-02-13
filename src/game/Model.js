import React, { Component }  from "react";
import {
    CellType,
} from '../common/utils';
import Controller from "./Controller";
import setInitBoard from "./helper";

export default class Model extends Component {
    constructor(props) {
        super();
        this.state = {
            matrix: Array.from({length: props.size}, ()=> Array.from({length: props.size}, () => CellType.blank)),
            currentPos : {
                x: Math.floor((props.size - 1) / 2),
                y: Math.floor((props.size - 1) / 2),
            },
            lastInput: {
                vector: 'y',
                incr: 1,
            },
        };
        this.bindActions();
    };

    componentDidMount() {
        this.setInitialMatrix();
    }

    bindActions() {
        this.setCurrentPos = this.setCurrentPos.bind(this);
        this.setMatrix = this.setMatrix.bind(this);
        this.setLastInput = this.setLastInput.bind(this);
    }

    setCurrentPos(vector, incr){
        this.setState({
            currentPos: {
                ...this.state.currentPos,
                [vector]: this.state.currentPos[vector] + incr,
            },
            matrix: this.state.matrix.map((col, x) =>
                col.map((cell, y) => cell !== CellType.duna ? cell : CellType.blank)
            ),
        });
    };

    setMatrix(value) {
        const {x, y} = this.state.currentPos;
        this.setState({
            matrix: this.state.matrix.map((col, index) =>
                index === x ?
                col.map((cell, index) => index === y ? value : cell)
                : col
            )
        });
    };

    setInitialMatrix() {
        const board = setInitBoard(this.state.currentPos, this.props.size);

        this.setState({
            matrix: this.state.matrix.map((col, x) =>
                col.map((cell, y) => board[x][y])
            )
        });
    };

    setLastInput(value) {
        this.setState({
            lastInput: value,
        });
    };

    render() {
        return (
            <Controller
                {...this.props}
                {...this.state}
                setCurrentPos={this.setCurrentPos}
                setMatrix={this.setMatrix}
                setLastInput={this.setLastInput}
            />
        )
    };
}

