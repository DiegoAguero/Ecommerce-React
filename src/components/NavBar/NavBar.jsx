import "./NavBar.css"
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
function NavBar() {
  return (
    <div className="navbar">
        <p>BoS</p>
        <p>Enlace 1</p>
        <p>Enlace 2</p>
        <p>Enlace 3</p>
        <CartWidget/>
    </div>
  )
}

export default NavBar;