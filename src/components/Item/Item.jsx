import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './item.css'
function Item({id, description, price, image, category}) {
  function addToCart(id){
    console.log(`Añadido al carrito, id: ${id}`)
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} className='img'/>
      <Card.Body className='contenedor'>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Title>${price}</Card.Title>
          <Card.Title>{category}</Card.Title>
          <Link to={`/detail/${id}`}>
            <Button variant="outline-danger" className='button'>Ver más detalles</Button>
          </Link>
      </Card.Body>
    </Card>
  )
}

export default Item