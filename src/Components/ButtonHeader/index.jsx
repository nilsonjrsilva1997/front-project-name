import React from 'react'
import './index.css';

function ButtonHeader(props) {
    return(
       
        <button>{props.children}</button>
    )
}

export default ButtonHeader