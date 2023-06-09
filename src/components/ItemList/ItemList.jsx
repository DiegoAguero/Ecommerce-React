import React from "react";
import Item from "../Item/Item";
import "./itemlist.css";
const ItemList = ({ productos = [] }) => {
  return (
    <div className="container">
      <div className="fila">
        {productos.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
