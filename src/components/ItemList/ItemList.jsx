import React from 'react'
import Item from '../Item/Item'
import './itemlist.css'
const ItemList = ({productos=[]}) => {
  return (
    <div className='container'>
      <div className='fila'>
        {productos.map((item) => <Item {...item} key={item.id}/>)}
      </div>
    </div>
  )
}
// function ItemList({productos=[]}) {
//   return (
//     <div>
//         <h3>Nuestros productos</h3>
//         {productos.map((item) => <Item {...item} key={item.id}/>)}
//     </div>
//   )
// }
export default ItemList