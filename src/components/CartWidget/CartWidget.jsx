import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
function CartWidget() {
  return (
    <>
      <a href='#'>
        <FontAwesomeIcon style={{fontSize:'20px'}} icon={faCartShopping}/>
        <b>5</b>
      </a>
    </>
  )
}

export default CartWidget