import React from 'react'
import Logo from '../../images/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-bootstrap'
import "./NavBar.css"

function NavBar() {
  return (
    <nav>
      <img src={Logo} alt="logo"/>
      <ul className="navbar">
        {/* No usar A, usar Link para movernos, de esta forma no recarga la pagina entera */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products/ropa">Ropa</Link></li>
        <li><Link to="/products/solaire">Solaire</Link></li>
        <li><Link to="/counter">Products</Link></li>
        <li><Link to="/pika">Contact</Link></li>
        <li><Link to="/cart"><CartWidget/></Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;