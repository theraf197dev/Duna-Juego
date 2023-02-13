import { Component } from "react";
import View from './View.jsx';
import {
    CellType,
} from '../common/utils';

export default class Controller extends Component {
    constructor(props) {
        super(props);
        this.bindActions();
    };

    bindActions() {
        this.handleChangePosition = this.handleChangePosition.bind(this);
        this.canMove = this.canMove.bind(this);
    }

    canMove(vector, incr) {
        return !this.isOutOfBounds(vector, incr) && !this.isObstacle(vector, incr);
    }

    isObstacle(vector, incr) {
        const nextPos = {
            ...this.props.currentPos,
            [vector]: this.props.currentPos[vector] + incr,
        };
        return this.props.matrix[nextPos.x][nextPos.y] === CellType.obstacle;
    }

    isOutOfBounds(vector, incr) {
        return (this.props.currentPos[vector] + incr) < 0 || (this.props.currentPos[vector] + incr) >= this.props.size;
    }

    handleChangePosition(vector, incr) {
        if(this.canMove(vector, incr)) {
            this.props.setCurrentPos(vector, incr);
            this.props.setLastInput({vector, incr});
        }
    }

    render() {
        return (
            <View
                {...this.props}
                handleChangePosition={this.handleChangePosition}
                canMove={this.canMove}
            />
        )
    }
}

