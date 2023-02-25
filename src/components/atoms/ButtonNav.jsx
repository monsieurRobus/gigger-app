import React from 'react'
import './ButtonNav.css'
const ButtonNav = (props) => {

    const {content,callback,id} =props

  return (
    <button data-song-pressed={id} onClick={() => callback(id)}>{content}</button>
  )
}

export default ButtonNav