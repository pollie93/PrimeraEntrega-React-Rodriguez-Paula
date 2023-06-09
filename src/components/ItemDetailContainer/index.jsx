import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ champions }) => {
  const { championName } = useParams();
  const champ = champions.find(
    (champion) =>
      champion.championName.toLowerCase() === championName.toLowerCase()
  );

  return (
    <div
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
    </div>
  );
};

export default ItemDetailContainer;
