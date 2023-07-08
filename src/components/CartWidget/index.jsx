import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./styles.css";

const CartWidget = ({ champsInCart, deleteCart }) => {
  const [showCart, setShowCart] = useState(false);

  const showCarrito = () => {
    setShowCart(!showCart);
  };

  const totalCost = champsInCart.reduce((accum, champ) => {
    accum = accum + champ.championCost;
    return accum;
  }, 0);

  return (
    <>
      <div onClick={showCarrito} className="logo-cart-container">
        <div className="icon-cart">
          <FontAwesomeIcon icon={faCartShopping} />
          <p className="hardcod-number">{champsInCart?.length || 0}</p>
        </div>
      </div>
      {showCart && (
        <div className="cart-checkout-container">
          <div className="cart-checkout-header">
            <h2 className="cart-checkout-title">Campeones Comprados</h2>
            <div className="icon-cart-trash" onClick={deleteCart}>
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
          {!!champsInCart &&
            !!Array.isArray(champsInCart) &&
            !!champsInCart.length &&
            champsInCart.map((champArray, idx) => {
              return (
                <div key={idx.toString()} className="cart-checkout-content">
                  <div className="cart-checkout-text-information">
                    <p>Nombre:{champArray.championName}</p>
                    <p>Esencia Azul:{champArray.championCost}</p>
                  </div>
                  <img
                    className="cart-checkout-image"
                    src={`../../champion/${champArray.imagen}`}
                    alt={champArray.championName}
                  />
                </div>
              );
            })}

          <div className="footer-cart">
            <p className="cart-full-blue-essence">
              Total esencia azul: {totalCost}
            </p>
          </div>
          {/* <button className="finalize-purchase">Finalizar compra</button> */}
          <Link
            to="/formulario"
            //className="link container-navBar-logo finish-purchase"
            className="finish-purchase"
          >
            Finalizar compra
          </Link>
        </div>
      )}
    </>
  );
};

export default CartWidget;
