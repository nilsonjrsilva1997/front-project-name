import React from "react";
import './index.css';

function ImageHeader(props) {
    return(
        <>
            <img class="header-image" src={props.src} alt={props.alt} />
        </>
    )
}

export default ImageHeader;