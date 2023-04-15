import React, {useState, useEffect} from 'react';
import getProducts from '../../helpers/getProducts';
import ItemList from '../ItemList/ItemList'
import {Spinner} from 'react-bootstrap'
import './itemlistcontainer.css'
function ItemListContainer({item}) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  

//Empezamos el inicio montaje, con un loading en true
  useEffect(()=>{
    setLoading(true)
  //Como es promesa, tiene que ir then
    getProducts()
      .then((res)=>{
        setItems(res)
      })
      .catch((error)=> console.log(error))
      //con finally terminamos el proceso
      .finally(()=>{setLoading(false)})
  }, [])
  return (
    <div>
        {
          //Poniendo un parentesis en vez de una llave en el map, se hace un return implicito
          loading ?  
          <div className='spinner'>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </Spinner>
          </div> 

          : <ItemList productos={items}/>
        }
    </div>
  )
}

export default ItemListContainer

