import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
function CartScreen() {
  const { carrito, precioTotal, removerItem, vaciarCarrito } =
    useContext(CartContext);
  return (
    <div>
      {carrito.length === 0 ? (
        <>
          <div className="container my-5 text-center">
            <h3>Carrito vacio, ve a añadir productos!</h3>
            <Link to={"/"} className="btn btn-danger">
              Volver a la pagina principal
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="container my-5">
            <h3 className="text-center">Resumen de compra</h3>

            {carrito.map((prod) => (
              <>
                <hr />

                <div className="listado">
                  <p>Producto: {prod.description}</p>
                  <p>${prod.price}</p>
                  <p>Cantidad: {prod.counter}</p>
                  <Button
                    className="btn btn-danger"
                    onClick={() => removerItem(prod.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </div>
              </>
            ))}
          </div>
          <>
            <div className="container my-5">
              <strong>Precio total: ${precioTotal()}</strong>
              <br />
            </div>
          </>
          <div className="container my-5 text-center">
            <Button variant="outline-danger" onClick={vaciarCarrito}>
              Vaciar carrito
            </Button>
            <Link to="/checkout">
              <Button variant="outline-danger">Terminar compra</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartScreen;
