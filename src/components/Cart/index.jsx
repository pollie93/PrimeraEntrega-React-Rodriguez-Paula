import { Link } from "react-router-dom";
import "./styles.css"

const Cart = ({champsInCart}) => {
    const groupChamps = () => {
        return champsInCart.reduce((accum, champ) => {
          const champInAccumIndex = accum.findIndex(
            (cha) => cha.championName === champ.championName
          );
    
          if (champInAccumIndex > -1) {
            accum[champInAccumIndex].quantity = accum[champInAccumIndex].quantity + 1;
            return accum;
          };
    
          accum.push({...champ, quantity: 1});
          return accum;
        }, []);
      };

      const totalCost = champsInCart.reduce((accum, champ) => {
        accum = accum + champ.championCost;
        return accum;
      }, 0);
      
    return (
        <div className="cart-container">
            {!!champsInCart &&
            !!Array.isArray(champsInCart) &&
            !!champsInCart.length &&
            groupChamps(champsInCart).map((champArray, idx) => {
              return (
                <div key={idx.toString()} className="cart-checkout-content">
                  <div className="cart-checkout-text-information">
                    <p>Nombre:{champArray.championName}</p>
                    <p>Esencia Azul:{champArray.championCost * champArray.quantity}</p>
                    <p>Cantidad:{champArray.quantity}</p>
                  </div>
                  <img
                    className="cart-image"
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
          <Link
            to="/formulario"
            //className="link container-navBar-logo finish-purchase"
            className="finish-purchase"
          >
            Finalizar compra
          </Link>
        </div>
    )
}

export default Cart;
