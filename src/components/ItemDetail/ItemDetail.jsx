import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";
import CartContext from "../context/CartContext";
import Swal from "sweetalert2";
function ItemDetail({ id, name, description, price, category, image, stock }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  //Emepzamos las funcionalidades del contexto
  const { addToCart } = useContext(CartContext);
  const [counter, setCounter] = useState(0);
  const sumarAlCarrito = () => {
    const newItem = {
      id,
      name,
      description,
      price,
      category,
      image,
      stock,
      counter,
    };
    if (counter === 0) {
      Swal.fire({
        icon: "error",
        title: "No puedes hacer eso!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      addToCart(newItem);
    }
  };

  return (
    <div className="containerr">
      <div className="imageContainer">
        <img src={image} className="image" />
      </div>
      <div className="filas">
        <p>{name}</p>
        <p>{description}</p>
        <p>${price}</p>
        <label htmlFor="talles">Talles </label>
        <select name="talles" id="" style={{ margin: 10 }}>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
        </select>
        <p>Stock: {stock}</p>
        <ItemCount max={stock} modify={setCounter} cantidad={counter} />
        <div>
          <Button variant="outline-danger" onClick={sumarAlCarrito}>
            Añadir al carrito
          </Button>
          <Button variant="outline-danger" onClick={goBack}>
            Volver hacia atras
          </Button>
          <Link to="/cartscreen">
            <Button variant="outline-danger">Ir al carrito</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
