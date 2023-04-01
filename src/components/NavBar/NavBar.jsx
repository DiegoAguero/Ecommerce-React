import "./NavBar.css"
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
function NavBar() {
  return (
    <div className="navbar">
        <a href="#">BoS</a>
        <a href="#">Enlace 1</a>
        <a href="#">Enlace 2</a>
        <a href="#">Enlace 3</a>
        <CartWidget/>
    </div>
  )
}

export default NavBar;