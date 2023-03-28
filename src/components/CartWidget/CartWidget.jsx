import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
function CartWidget() {
  return (
    <>
      <p>
        <FontAwesomeIcon style={{fontSize:'20px'}} icon={faCartShopping}/>
        <b>5</b>
      </p>
    </>
  )
}

export default CartWidget