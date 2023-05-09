import React, { useEffect, useState } from "react";
import { getFirestore } from "../../firebase/config";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Spinner, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const products = db.collection("products");
    const item = products.doc(itemId);
    item
      .get()
      .then((doc) => {
        if (doc.exists) {
          setItem({
            id: doc.id,
            ...doc.data(),
          });
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);
  return (
    <>
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
        </div>
      ) : item == undefined ? (
        <div className="container text-center">
          <h2>Error, no existe el item.</h2>
          <Link to="/">
            <Button variant="outline-danger">Ir a la pagina principal</Button>
          </Link>
        </div>
      ) : (
        <ItemDetail {...item} />
      )}
    </>
  );
}

export default ItemDetailContainer;
