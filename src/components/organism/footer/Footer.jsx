import React from 'react'
import Button from '../../atoms/Button'
import './Footer.css'

const postSongs = () => {
  alert("fuera")
}


const Footer = () => {
  return (
    <footer className={"footer-general"}><Button callback={postSongs} content={'Hola'}/></footer>
  )
}

export default Footer