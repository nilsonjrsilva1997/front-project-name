import React from 'react'
import './index.css';

function ButtonHeader(props) {
    return(
        <button class="btn-header">{props.children}</button>
    )
}

export default ButtonHeader