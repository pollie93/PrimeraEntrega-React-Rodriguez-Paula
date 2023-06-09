import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ItemListContainer = ({ champions }) => {
  console.log(champions);
  return (
    <div className="container-cards-champ">
      {!!champions?.length &&
        champions.map((champ) => {
          return (
            <Link
              to={`/item/${champ.championName.toLowerCase()}`}
              className="champion-card"
              key={champ.championName}
            >
              <img
                src={`../../champion/${champ.imagen}`}
                alt={champ.imagen}
                className="card"
              />
              <p className="champion-name">{champ.championName}</p>
            </Link>
          );
        })}
    </div>
  );
};

export default ItemListContainer;
