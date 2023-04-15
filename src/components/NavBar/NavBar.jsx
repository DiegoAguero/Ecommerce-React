import "./NavBar.css"
import Logo from '../../images/logo.png'
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
function NavBar() {
  return (
    <nav>
      <img src={Logo} alt="logo"/>
      <ul className="navbar">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
        <CartWidget/>
      </ul>
    </nav>
  )
}

export default NavBar;