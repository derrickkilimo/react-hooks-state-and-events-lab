import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false); // Initialize with false

  const toggleCart = () => {
    setInCart(prevInCart => !prevInCart); // Toggle the inCart state
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
