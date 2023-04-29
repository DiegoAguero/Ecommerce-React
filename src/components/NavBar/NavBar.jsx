import React from 'react'
import Logo from '../../assets/logo.png'
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
        <li><Link to="/products/official">Official</Link></li>
        <li><Link to="/products/collab">Collab</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cartscreen"><CartWidget/></Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;