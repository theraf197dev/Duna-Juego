import React, { Component }  from "react";
import {
    CellType,
} from '../common/utils';
import setInitBoard from "./helper";
import Controller from "./Controller";
import seekerMove from "./helper/seeker";

export default class Model extends Component {
    constructor(props) {
        super();
        this.state = {
            matrix: Array.from({length: props.size}, ()=> Array.from({length: props.size}, () => CellType.blank)),
            currentPos : {
                x: Math.floor((props.size - 1) / 2),
                y: Math.floor((props.size - 1) / 2),
            },
            seekerCurrentPos: {
                x: 0,
                y: 0,
            },
            seekerLastMovement: {
                vector: 'x',
                incr: 1,
            },
            coverSeekerValue: CellType.pizza,
            timer: 0,
            isGameAlive: true,
            lastInput: {
                vector: 'y',
                incr: 1,
            },
        };
        this.bindActions();
    };

    bindActions() {
        this.setCurrentPos = this.setCurrentPos.bind(this);
        this.setMatrix = this.setMatrix.bind(this);
        this.setLastInput = this.setLastInput.bind(this);
        this.stopInterval = this.stopInterval.bind(this);
        this.endGame = this.endGame.bind(this);
    }

    componentDidMount() {
        this.setInitialMatrix();
        if(this.props.mode === 'SEEKER'){
            this.interval = setInterval(() => {
                const {vector, incr} = seekerMove(
                    this.state.seekerLastMovement,
                    this.state.seekerCurrentPos,
                    this.state.matrix,
                    this.props.size
                );
                this.setSeekerPos(vector, incr);
            }, 500);
        }
    }

    componentWillUnmount() {
        if(this.props.mode === 'SEEKER'){
            this.stopInterval();
        }
    }

    stopInterval() {
        clearInterval(this.interval);
    }

    endGame() {
        this.props.setGame(false);
    }

    setCurrentPos(vector, incr) {
        const nextPos = {
            ...this.state.currentPos,
            [vector]: this.state.currentPos[vector] + incr,
        };

        if(this.state.matrix[nextPos.x][nextPos.y] === CellType.seeker) {
            this.props.setGame(false);
        } else {
            this.setState({
                currentPos: nextPos,
                matrix: this.state.matrix.map((col, x) =>
                    col.map((cell) => cell !== CellType.duna ? cell : CellType.blank)
                ),
            });

            if(this.state.matrix[nextPos.x][nextPos.y] === CellType.pizza){
                this.props.setPizzas(this.props.pizzas - 1);
            }
        }
    };

    setSeekerPos(vector, incr) {
        const nextSeekerPos = {
            ...this.state.seekerCurrentPos,
            [vector]: this.state.seekerCurrentPos[vector] + incr,
        };

        if(this.state.matrix[nextSeekerPos.x][nextSeekerPos.y] === CellType.duna) {
            this.props.setGame(false);
        }
        else {
            this.setState({
                seekerCurrentPos: {
                    ...this.state.seekerCurrentPos,
                    [vector]: this.state.seekerCurrentPos[vector] + incr,
                },
                seekerLastMovement: {
                    incr,
                    vector,
                },
                matrix: this.state.matrix.map((col, x) =>
                    col.map((cell) => cell !== CellType.seeker ? cell : this.state.coverSeekerValue)
                ),
                coverSeekerValue: this.state.matrix[nextSeekerPos.x][nextSeekerPos.y],
            });
        }
    };

    setMatrix(value, pos = this.state.currentPos) {
        const {x, y} = pos;
        this.setState({
            matrix: this.state.matrix.map((col, index) =>
                index === x ?
                col.map((cell, index) => index === y ? value : cell)
                : col
            )
        });
    };

    setInitialMatrix() {
        const { board, pizzas } = setInitBoard(this.props.size, this.props.mode, this.props.difficulty);
        this.setState({
            matrix: this.state.matrix.map((col, x) =>
                col.map((cell, y) => board[x][y])
            )
        });
        this.props.setPizzas(pizzas);
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
                endGame={this.endGame}
                setCurrentPos={this.setCurrentPos}
                setLastInput={this.setLastInput}
                setMatrix={this.setMatrix}
                stopInterval={this.stopInterval}
            />
        )
    };
};

Model.displayName = 'ModelGame';

