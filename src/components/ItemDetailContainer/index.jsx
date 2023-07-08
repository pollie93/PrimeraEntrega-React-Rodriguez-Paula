import { useParams } from "react-router-dom";
import "./styles.css";

const ItemDetailContainer = ({ champions }) => {
  const { championName } = useParams();
  const champ = champions.find(
    (champion) =>
      champion.championName.toLowerCase() === championName.toLowerCase()
  );
  console.log(champ);
  return (
    <div
      to={`/item/${champ.championName.toLowerCase()}`}
      className="champion-card full-screen"
      key={champ.championName}
    >
      <img
        src={`../../champion/${champ.imagen}`}
        alt={champ.imagen}
        className="card"
      />
      <p className="champion-name">{champ.championName}</p>
      <p className="champion-name">{champ.championType}</p>
      <p className="champion-name">esencia azul {champ.championCost}</p>
      <p className="champion-name">{champ.championDescription}</p>
      <p className="champion-name">{champ.championDifficulty}</p>
    </div>
  );
};

export default ItemDetailContainer;
