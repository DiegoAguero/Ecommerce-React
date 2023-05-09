import React, { useState, useEffect } from "react";
import { getFirestore } from "../../firebase/config";
import ItemList from "../ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import "./itemlistcontainer.css";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const products = db.collection("products");

    if (categoryId) {
      const filtrado = products.where("category", "==", categoryId);
      filtrado
        .get()
        .then((res) => {
          const newItem = res.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setItems(newItem);
        })
        .catch((error) => console.log(error))
        .finally(setLoading(false));
    } else {
      products
        .get()
        .then((res) => {
          const newItem = res.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          console.table(newItem);
          setItems(newItem);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [categoryId, setLoading]);
  return (
    <div>
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
        </div>
      ) : (
        <ItemList productos={items} />
      )}
    </div>
  );
}

export default ItemListContainer;
