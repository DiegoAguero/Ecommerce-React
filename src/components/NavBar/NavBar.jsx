import React from "react";
import Logo from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <img src={Logo} alt="logo" />
      <ul className="navbar">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <Dropdown>
          <Dropdown.Toggle
            variant="black"
            id="dropdown-basic"
            className="text-white"
          >
            Categorias
          </Dropdown.Toggle>
          <Dropdown.Menu className="bg-dark">
            <Dropdown.Item>
              <li>
                <Link to="/products/official">Official</Link>
              </li>
            </Dropdown.Item>
            <Dropdown.Item>
              <li>
                <Link to="/products/collab">Collab</Link>
              </li>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <li>
          <Link to="/orders">Ordenes</Link>
        </li>
        <li>
          <Link to="/cartscreen">
            <CartWidget />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
