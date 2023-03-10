import React from 'react'

const Button = (props) => {
    const {content,callback} = props

    return (
        <button onClick={callback}>{content}</button>
    )
}

export default Button