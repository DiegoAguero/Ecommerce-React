import React from "react";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { AiOutlineMinus } from "@react-icons/all-files/ai/AiOutlineMinus";
import Swal from "sweetalert2";
import "./itemcount.css";
function ItemCount({ max, cantidad, modify }) {

  const sumar = () => {
    if (cantidad < max) {
      modify(cantidad + 1);
    } else {
      Swal.fire({
        icon: "error",
        title: `No hay más stock!`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const restar = () => {
    if (cantidad > 0) {
      modify(cantidad - 1);
    } else {
      Swal.fire({
        icon: "error",
        title: `No podés comprar negativamente.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <div className="d-inline-flex mb-1">
        <button onClick={sumar}>
          <AiOutlinePlus size={30} />
        </button>
        <h4>{cantidad}</h4>
        <button onClick={restar}>
          <AiOutlineMinus size={30} />
        </button>
      </div>
    </>
  );
}

export default ItemCount;
