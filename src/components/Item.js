import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, inCart] = useState(false);

  function handleClick() {
    inCart((cart) => !cart);
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">
        {cart ? "Remove from cart" : "Add to cart"}
      </button>
    </li>
  );
}

export default Item;
