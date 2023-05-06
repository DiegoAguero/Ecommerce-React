import React from 'react'
import Logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import "./NavBar.css"

function NavBar() {
  return (
    <nav>
      <img src={Logo} alt="logo"/>
      <ul className="navbar">
        {/* No usar A, usar Link para movernos, de esta forma no recarga la pagina entera */}
        <li><Link to="/">Home</Link></li>
        <Dropdown>
          <Dropdown.Toggle variant="black" id="dropdown-basic" className='text-white'>
            Category
          </Dropdown.Toggle>
          <Dropdown.Menu className='bg-dark'>
            <Dropdown.Item><li><Link to="/products/official">Official</Link></li></Dropdown.Item>
            <Dropdown.Item ><li><Link to="/products/collab">Collab</Link></li></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
        
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cartscreen"><CartWidget/></Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;