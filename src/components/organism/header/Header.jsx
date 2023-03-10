import React from 'react'
import './Header.css'


const Header = (props) => {

    const {name,date} = props
  return (
    <header className={"header-general"}>
        <h1>{name}</h1>
        <h2>{date}</h2>
    </header>
  )
}

export default Header