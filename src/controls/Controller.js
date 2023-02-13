import { Component } from "react";
import View from './View.jsx';
import { canMove } from "../common/utils.js";

export default class Controller extends Component {
    constructor(props) {
        super(props);
        this.bindActions();
    };

    bindActions() {
        this.handleChangePosition = this.handleChangePosition.bind(this);
    }

    handleChangePosition(vector, incr) {
        if(canMove(this.props.matrix, this.props.currentPos, vector, incr, this.props.size)) {
            this.props.setCurrentPos(vector, incr);
            this.props.setLastInput({vector, incr});
        }
    }

    render() {
        return (
            <View
                {...this.props}
                handleChangePosition={this.handleChangePosition}
            />
        )
    }
}

