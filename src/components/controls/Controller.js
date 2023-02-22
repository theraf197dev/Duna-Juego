import { Component } from "react";
import View from './View.jsx';

export default class Controller extends Component {
    constructor(props) {
        super(props);
        this.bindActions();
    };

    bindActions() {
        this.handleChangePosition = this.handleChangePosition.bind(this);
        this.handleBark = this.handleBark.bind(this);
    };

    handleChangePosition(vector, incr) {
        this.props.setCurrentPos(vector, incr);
    };

    handleBark() {
        console.log('bark');
    };

    render() {
        return (
            <View
                {...this.props}
                handleChangePosition={this.handleChangePosition}
                handleBark={this.handleBark}
            />
        )
    }
}

