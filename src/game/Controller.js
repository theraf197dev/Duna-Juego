import { Component } from "react";
import {
    CellType,
} from '../common/utils';
import View from './View.jsx';

export default class Controller extends Component {
    componentDidUpdate(prevProps) {
        if(prevProps.currentPos !== this.props.currentPos){
            this.props.setMatrix(CellType.duna);
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
}

