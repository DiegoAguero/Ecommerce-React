import React from "react";
import Order from "../Order/Order";
function OrderDetail({ item = [], totalPrice }) {
  return (
    <div className="container">
      <div className="fila">
        {item.map((items) => (
          <Order {...items} key={items.id} />
        ))}
      </div>
      <hr />
      <h2 className="text-center">Precio total: ${totalPrice}</h2>
    </div>
  );
}

export default OrderDetail;
