import { Component } from "react";
import {
    CellType,
} from '../common/utils';
import View from './View.jsx';

export default class Controller extends Component {
    componentDidUpdate(prevProps) {
        if(prevProps.currentPos !== this.props.currentPos) {
            this.props.setMatrix(CellType.duna);
        }
        if(prevProps.seekerCurrentPos !== this.props.seekerCurrentPos) {
            this.props.setMatrix(CellType.seeker, this.props.seekerCurrentPos);
        }
        if(prevProps.isGameAlive !== this.props.isGameAlive && this.props.mode === 'SEEKER') {
            this.props.stopInterval();
        }
    }

    render() {
        return (
            <View
                {...this.props}
                setCurrentPos={this.props.setCurrentPos}
            />
        )
    }
};

Controller.displayName = 'ControllerGame';
