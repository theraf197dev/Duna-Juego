import React, { Component }  from "react";
import {
    CellType,
    GameMode,
    GameStatus,
} from '../../common/utils';
import {setInitBoard} from "./helper";
import Controller from "./Controller";
import seekerMove from "./helper/seeker";

export default class Model extends Component {
    constructor(props) {
        super();
        this.state = {
            coverSeekerValue: CellType.pizza,
            currentPos : {
                x: Math.floor((props.size - 1) / 2),
                y: Math.floor((props.size - 1) / 2),
            },
            gameStatus: GameStatus.playing,
            lastInput: {
                incr: 1,
                vector: 'y',
            },
            matrix: Array.from({length: props.size}, ()=> Array.from({length: props.size}, () => CellType.blank)),
            pizzas: 1,
            seekerCurrentPos: {
                x: 0,
                y: 0,
            },
            seekerLastMovement: {
                incr: 1,
                vector: 'x',
            },
        };
        this.bindActions();
    };

    bindActions() {
        this.setCurrentPos = this.setCurrentPos.bind(this);
        this.setMatrix = this.setMatrix.bind(this);
        this.stopInterval = this.stopInterval.bind(this);
        this.endGame = this.endGame.bind(this);
    }

    componentDidMount() {
        this.setInitialMatrix();
        if(this.props.mode === GameMode.seeker){
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
        if(this.props.mode === GameMode.seeker){
            this.stopInterval();
        }
    }

    stopInterval() {
        clearInterval(this.interval);
    }

    setPizzas(pizzas) {
        this.setState({
            pizzas: pizzas,
        });
    };

    endGame(status) {
        this.setState({
            gameStatus: status,
        });
    };

    setCurrentPos(vector, incr) {
        const nextPos = {
            ...this.state.currentPos,
            [vector]: this.state.currentPos[vector] + incr,
        };

        this.setState({
            currentPos: nextPos,
            matrix: this.state.matrix.map((col, x) =>
                col.map((cell) => cell !== CellType.duna ? cell : CellType.blank)
            ),
            lastInput: {
                incr,
                vector,
            },
            pizzas: this.state.matrix[nextPos.x][nextPos.y] === CellType.pizza ?
                this.state.pizzas - 1 : this.state.pizzas,
        });

        if(this.state.matrix[nextPos.x][nextPos.y] === CellType.seeker) {
            this.endGame(GameStatus.defeat);
        }
    };

    setSeekerPos(vector, incr) {
        const nextSeekerPos = {
            ...this.state.seekerCurrentPos,
            [vector]: this.state.seekerCurrentPos[vector] + incr,
        };

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

        if(this.state.matrix[nextSeekerPos.x][nextSeekerPos.y] === CellType.duna) {
            this.endGame(GameStatus.defeat);
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
            ),
            pizzas: pizzas,
        });
    };

    render() {
        return (
            <Controller
                {...this.props}
                {...this.state}
                endGame={this.endGame}
                setCurrentPos={this.setCurrentPos}
                setMatrix={this.setMatrix}
                stopInterval={this.stopInterval}
            />
        )
    };
};

Model.displayName = 'ModelGame';

