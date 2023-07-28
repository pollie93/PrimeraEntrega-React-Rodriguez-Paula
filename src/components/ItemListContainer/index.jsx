import { Link } from "react-router-dom";
import "./styles.css";

const ItemListContainer = ({
  champsInCart,
  champions,
  addToCart,
  handleDeleteChampion,
}) => {
  

  const currentChampionCount = (champ) => {
    return champsInCart.reduce((accum, item) => {
      if (item.championName === champ.championName) accum = accum + 1;
      return accum;
    }, 0);
  };

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
              <div className="counts-container">
                <button
                  className="add-button-card-container"
                  onClick={() => addToCart(champ)}
                >
                  +
                </button>
                <div className="add-button-card-container">
                  {currentChampionCount(champ)}
                </div>
                <buttton
                  className="add-button-card-container"
                  onClick={() => handleDeleteChampion(champ)}
                >
                  -
                </buttton>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ItemListContainer;
