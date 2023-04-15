import React, { useEffect, useState } from "react";
import getProducts from "../../helpers/getProducts"
import ItemDetail from "../ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()
    useEffect(()=>{
        setLoading(true)
        getProducts()
            .then(res=>{
                setItem(res.find((item)=> item.id === Number(itemId)))
            })
            .catch(error => console.log(error))
            .finally(()=>{
                setLoading(false)
            })
    }, [itemId])
  return (
    <section>
        {
            loading?
            <div className="spinner">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </div>
            :<ItemDetail {...item}/>
        }
    </section>

  );
}

export default ItemDetailContainer;
