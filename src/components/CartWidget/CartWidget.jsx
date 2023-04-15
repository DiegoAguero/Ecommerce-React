import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function CartWidget() {
  return (
    <>
        <FontAwesomeIcon style={{fontSize:'20px'}} icon={faCartShopping}/>
        <b>5</b>
    </>
  )
}

export default CartWidget