import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'
function CartWidget() {
  const {calcularCantidad} = useContext(CartContext)
  
  return (
    <>
        <FontAwesomeIcon style={{fontSize:'20px'}} icon={faCartShopping}/>
        <b>{calcularCantidad()}</b>
    </>
  )
}

export default CartWidget