import React, { useContext } from 'react'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'
function CartScreen() {

    const {carrito, precioTotal, removerItem, vaciarCarrito} = useContext(CartContext)
    return (
        <div>
            {carrito.length===0?
            <>
                <h3>Carrito vacio, ve a añadir productos!</h3>
                <Link to={'/'} className='btn btn-danger'>Volver a la pagina principal</Link>
            </>
            :
            <>
            {carrito.map((prod)=>(
                
                <div className='container my-5'>
                    <h3>Resumen de compra</h3>
                    <hr />
                    <div className='listado'>
                        <p>Producto: {prod.description}</p>
                        <p>${prod.price}</p>
                        <p>Cantidad: {prod.counter}</p>
                        <Button className='btn btn-danger' onClick={()=> removerItem(prod.id)}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </Button>
                    </div>  
                </div>
                ))
            }
            <Button variant='outline-danger' onClick={vaciarCarrito}>Vaciar carrito</Button>
            <Link to='/checkout'><Button variant='outline-danger'>Terminar compra</Button></Link>
            <strong>Precio total: ${precioTotal()}</strong>
            </>
            }
        </div>
    )
}

export default CartScreen