import React, { useEffect, useState } from "react";
import getProducts from "../../helpers/getProducts";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        setItem(res);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <section>
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
        </div>
      ) : (
        <ItemDetail />
      )}
    </section>
  );
}

export default ItemDetailContainer;
