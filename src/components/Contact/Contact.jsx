import React, {useState} from 'react'
import {getFirestore} from '../../firebase/config'
import 'firebase/firestore'
function Contact() {
    const [email, setEmail] = useState('')
    const [nombre, setNombre] = useState('')
    const [description, setDescription] = useState('')
    const [orderId, setOrderId] = useState('')
    const handleSubmit = (e) =>{
        const db = getFirestore()
        const orders = db.collection('orders')
        // hacer bien la query (SOLUCIONADO AHORA SOLUCIONAR POR QUE CARAJO NO ME DEVUELVE EL ID DEL ITEM)
        const filter = orders.where('item.id', '==', orderId)
        // const result = Object.values(orders)
        // for(let resultado in result){
        //     console.log(result[resultado])
        // }
        //no anda esto, no me tira el item que contiene el orderID
        filter.get()
        .then((res)=>{
            const newItem = res.docs.map((doc)=>{
                return{id: doc.id, ...doc.data()}
              })
            console.log(newItem)
        })
        // const contact = {
        //     buyer:{
        //         email,
        //         nombre,
        //         orderId,
        //         description
        //     }
            
        // }
        e.preventDefault()
        e.target.reset()
    }
  return (
    <div>
        <h3 className="text-center">Contact</h3>
        <form onSubmit={handleSubmit} className='container mt-3'>
            <div className="form-group">
                <label htmlFor="name"></label>
                <input type="text" className="form-control" placeholder='Name' onChange={(e =>{setNombre(e.target.value)})} value={nombre}/>
            </div>
            <div className="form-group">
                <label htmlFor="email"></label>
                <input type="email" className="form-control" placeholder='Email' onChange={(e =>{setEmail(e.target.value)})} value={email}/>
            </div>
            <div className="form-group">
                <label htmlFor="orderId"></label>
                <input type="text" className="form-control" placeholder='Order ID' onChange={(e =>{setOrderId(e.target.value)})} value={orderId}/>
            </div>
            <div className="form-group">
                <label htmlFor="description"></label>
                <textarea name="" id="" cols="30" rows="10"className='form-control' placeholder='Description'onChange={(e =>{setDescription(e.target.value)})} value={description}></textarea>
            </div>
            <div className='mt-2'>
                <button className='btn btn-success'>Enviar datos</button>
                <button className='btn btn-danger'>Eliminar todo</button>
            </div>
        </form>
    </div>
  )
}

export default Contact