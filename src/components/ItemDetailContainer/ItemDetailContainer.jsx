import React, { useEffect, useState } from "react";
// import getProducts from "../../helpers/getProducts"
import { getFirestore } from "../../firebase/config";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()
    useEffect(()=>{
        // setLoading(true)
        // getProducts()
        //     .then(res=>{
        //         setItem(res.find((item)=> item.id === Number(itemId)))
        //     })
        //     .catch(error => console.log(error))
        //     .finally(()=>{
        //         setLoading(false)
        //     })
        setLoading(true)
        const db = getFirestore()
        const products = db.collection('products')
        const item = products.doc(itemId)
        item.get()
        .then((doc)=>{
            setItem({
                id: doc.id, ...doc.data()
            })
        })
        .catch((error)=>console.log(error))
        .finally(()=>{
            setLoading(false)
        })
    }, [itemId])    
  return (
    <>
        {
            loading?
            <div className="spinner">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </div>
            :<ItemDetail {...item}/>
        }
    </>
  );
}

export default ItemDetailContainer;
