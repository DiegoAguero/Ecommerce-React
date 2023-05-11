import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import { getFirestore } from "../../firebase/config";
import firebase from "firebase";
import "firebase/firestore";
import Swal from "sweetalert2";
function Checkout() {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [numero, setNumero] = useState("");

  const handleSubmit = (e) => {
    e.target.reset();
    e.preventDefault();
    const orden = {
      buyer: {
        email,
        nombre,
        apellido,
        numero,
      },
      item: carrito,
      total_price: precioTotal(),
      data: firebase.firestore.Timestamp.fromDate(new Date()),
    };
    console.log(orden);
    // Hacemos funcion para enviar la orden a firebase
    const db = getFirestore();
    const orders = db.collection("orders");

    orders
      .add(orden)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "La compra ha sido realizada correctamente.",
          text: `Guarde su numero de compra ${res.id}`,
          willClose: () => {
            vaciarCarrito();
          },
        });
      })
      .finally(() => {
        console.log("operacion terminada");
      });

    carrito.forEach((item) => {
      const docRef = db.collection("products").doc(item.id);

      docRef.get().then((doc) => {
        docRef.update({
          stock: doc.data().stock - item.counter,
        });
      });
    });
  };

  return (
    <div>
      <h3 className="text-center">Terminar compra</h3>
      <hr />
      <form onSubmit={handleSubmit} className="container mt-3">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setNombre(e.target.value);
            }}
            value={nombre}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setApellido(e.target.value);
            }}
            value={apellido}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="mail"
            className="form-control"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="numero">Numero</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setNumero(e.target.value);
            }}
            value={numero}
            required
          />
        </div>
        <div className="mt-3">
          <Button type="submit" variant="success">
            Finalizar compra
          </Button>
          <Link to="/cartscreen">
            <Button variant="outline-danger">Volver al carrito</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
