import React from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './itemdetail.css'
function ItemDetail({id, description, price, category, image}) {
  return (
    // Mejorar esto, no quiero utilizar un card, quiero algo mejor que esta en el figma de la zapatilla de nike
    <div className='containerr'>
      <div className='imageContainer'>
        <img src={image} className='image'/>
      </div>
      <div className='filas'>
        <p>{description}</p>
        <p>${price}</p>
        <label htmlFor="talles">Talles </label>
        <select name="talles" id='' style={{margin:10}}>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
        </select>
        <ItemCount/>
        <Button variant="outline-danger">Añadir al carrito</Button>
      </div>
    </div>
    // <Card style={{ width: '18rem' }}>
    // <Card.Img variant="top" src={image} className='img'/>
    // <Card.Body className='contenedor'>
    //     <Card.Text>
    //       {description}
    //     </Card.Text>
    //     <Card.Title>${price}</Card.Title>
    //     <Card.Title>{category}</Card.Title>
    //     <Link to={`/detail/${id}`}>
    //       <Button variant="outline-danger" className='button'>Añadir al carrito</Button>
    //     </Link>
    // </Card.Body>
    // </Card>
  )
}

export default ItemDetail