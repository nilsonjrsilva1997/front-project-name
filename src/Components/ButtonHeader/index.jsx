import React from 'react'

function ButtonHeader(props) {
    return(
        <div>
            <button>{props.children}</button>
        </div>
    )
}

export default ButtonHeader