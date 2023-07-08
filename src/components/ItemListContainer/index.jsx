import { Link } from "react-router-dom";
import "./styles.css";

const ItemListContainer = ({ champions, addToCart }) => {
  return (
    <div className="container-cards-champ">
      {!!champions?.length &&
        champions.map((champ, idx) => {
          return (
            <div className="champion-card" key={idx.toString()}>
              <Link
                to={`/item/${champ.championName.toLowerCase()}`}
                className="link"
                key={champ.championName}
              >
                <img
                  src={`../../champion/${champ.imagen}`}
                  alt={champ.imagen}
                  className="card"
                />
                <p className="champion-name">{champ.championName}</p>
                <p className="champion-name">
                  Esencia azul: {champ.championCost}
                </p>
              </Link>
              <button
                className="add-button-card-container"
                onClick={() => addToCart(champ)}
              >
                Añadir al carrito
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ItemListContainer;
