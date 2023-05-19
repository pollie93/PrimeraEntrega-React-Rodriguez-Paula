import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const CartWidget = () => {
  return (
    <div className="logo-cart-container">
      <div className="cart-container">
        <FontAwesomeIcon icon={faCartShopping} />
        <p className="hardcod-number">0</p>
      </div>
    </div>
  );
};

export default CartWidget;
