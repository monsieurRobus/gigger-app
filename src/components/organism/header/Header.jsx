import React from 'react'
import './Header.css'


const Header = (props) => {

    const {name} = props
  return (
    <header className={"header-general"}>
        <h1>{name}</h1>
        <h2>11/03/2023</h2>
    </header>
  )
}

export default Header