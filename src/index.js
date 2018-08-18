import React, { Component } from 'react';
import './icofont/icofont.min.css';
export default class Icofont extends Component {
    render() {
        if (!this.props.icon || typeof this.props.icon!='string') return null;
        const { icon,size,rotate,flip,className, ...restOfProps } = this.props;
        // Look for prefix in icon. Don't prefix it if it's already prefixed
        let iconValue = icon.match(/^icofont\-/)?icon:`icofont-${icon}`;
        // Manage Rotate Value
        const totalRotate = rotate?` icofont-rotate-${rotate}`:"";
        // Manage Size value
        const totalSize = size?` icofont-${size}x`:"";
        // Manage Flip
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
        // Handle ClassName
        const cName = className?`${className} `:"";
        // Render
        return (
            <i {...restOfProps} 
            className={`${cName}${iconValue}${totalRotate}${totalSize}${flipAmount}`}></i>
        )
    }
}
