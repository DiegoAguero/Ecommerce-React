import React, {useState} from 'react'
import {getFirestore} from '../../firebase/config'
import 'firebase/firestore'
import Swal from 'sweetalert2'
import OrderDetail from '../OrderDetail/OrderDetail'
function OrderDetailContainer() {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const [item, setItem] = useState()
    const [total, setTotal] = useState(0)
    const handleSubmit =  (e) =>{
        const db = getFirestore()
        const orders = db.collection('orders').doc(orderId)
        orders.get()
        .then((ref)=>{
            if(ref.exists){
                setLoading(true)
                const prod = ref.data().item
                const totalPrice = ref.data().total_price
                setTotal(totalPrice)
                setItem(prod)
            }else{
                Swal.fire({
                    icon: 'error',
                    title: `La id de la orden no es correcta!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        .catch((error)=>console.log(error))

        e.preventDefault()
        e.target.reset()
    }
    return(
        <>
            {
                loading?
                    <OrderDetail item={item} totalPrice={total}/>
                :
                <div>
                    <form onSubmit={handleSubmit} className='container mt-3'>
                        <div className="form-group">
                            <h3 className='text-center'>Ingrese el id de la orden para ver los detalles!</h3>
                            <label htmlFor="orderId"></label>
                            <input type="text" className="form-control" placeholder='Order ID' onChange={(e =>{setOrderId(e.target.value)})} value={orderId}/>
                        </div>
                        <div className='mt-2'>
                            <button className='btn btn-success'>Comprobar orden</button>
                        </div>
                    </form>
                </div>
            }
        </>
    )
}


export default OrderDetailContainer