import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './item.css'
function Item({id, description, price, image}) {
  function addToCart(id){
    console.log(`Añadido al carrito, id: ${id}`)
  }
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} className='img'/>
    <Card.Body className='contenedor'>
      {/* <Card.Title></Card.Title> */}
      <Card.Text>
        {description}
      </Card.Text>
      <Card.Title>${price}</Card.Title>
      <Button variant="outline-danger" className='button'>Añadir al carrito</Button>
    </Card.Body>
  </Card>
  )
}

export default Item