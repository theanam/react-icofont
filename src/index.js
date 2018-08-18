import React, { Component } from 'react';
import './icofont/icofont.min.css';
export default class Icofont extends Component {
    render() {
        const { icon,size,rotate,flip, ...restOfProps } = this.props;
        if (!this.props.icon) return null;
        return (
            <i {...restOfProps} className={`icofont-${this.props.icon}`}></i>
        )
    }
}
