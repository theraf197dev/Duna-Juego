import { Component } from "react";
import PropTypes from 'prop-types';
import View from './View.jsx';
import barkSFX from '../../common/media/bark.mp3';
import { GameStatus } from "../../common/utils.js";

export default class Controller extends Component {
    constructor(props) {
        super(props);
        this.bindActions();
        this.audio = new Audio(barkSFX);
    };

    bindActions() {
        this.handleChangePosition = this.handleChangePosition.bind(this);
        this.handleBark = this.handleBark.bind(this);
    };

    handleChangePosition(vector, incr) {
        this.props.setCurrentPos(vector, incr);
    };

    handleBark() {
        this.audio.play();
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

Controller.propTypes = {
    controls: PropTypes.array,
    currentPos: PropTypes.object,
    gameStatus: PropTypes.string,
    matrix: PropTypes.array,
    setCurrentPos: PropTypes.func,
    size: PropTypes.number,
};

Controller.displayName= 'ControllerControls';
