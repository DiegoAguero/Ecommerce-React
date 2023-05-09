import React, {useState} from 'react'
import {getFirestore} from '../../firebase/config'
import 'firebase/firestore'
import Swal from 'sweetalert2'
import {Card, Button} from 'react-bootstrap'

function Order({description, image, price, counter}) {
  return (
    <>
    <Card style={{ width: '18rem' }} className='border'>
    <Card.Img variant="top" src={image} className='img'/>
      <Card.Body className='contenedor'>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Title>${price}</Card.Title>
          <Card.Title>Cantidad: {counter}</Card.Title>
      </Card.Body>
    </Card>
  </>
  )
}

export default Order