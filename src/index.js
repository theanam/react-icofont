import React, { Component } from 'react';
import './icofont/icofont.min.css';
export default class Icofont extends Component {
    render() {
        const { icon,size,rotate,flip, ...restOfProps } = this.props;
        const totalRotate = rotate?` icofont-rotate-${rotate}`:"";
        const totalSize = size?` icofont-${size}x`:"";
        let flipAmount = "";
        if(flip){
            let flips = flip.split(" ");
            let totalFlip = "";
            if(flips.indexOf("h")!=-1 || flip.indexOf("horizontal")!=-1){
                totalFlip+= " icofont-flip-horizontal";
            }
            if(flips.indexOf("v") != -1 || flips.indexOf("vertical")!=-1){
                totalFlip += " icofont-flip-vertical";
            }
            if(totalFlip===""){
                console.warn("Flip value Invalid for IcoFont");
            }
            flipAmount = totalFlip;
        }
        if (!this.props.icon) return null;
        return (
            <i {...restOfProps} className={`icofont-${this.props.icon}${totalRotate}${totalSize}${flipAmount}`}></i>
        )
    }
}
