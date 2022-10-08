import React from "react";
import './index.css';

function ImageHeader(props) {
    return(
        <>
            <img src={props.src} alt={props.alt} />
        </>
    )
}

export default ImageHeader;