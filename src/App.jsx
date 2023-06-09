import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const champsArray = [
  {
    championName: "Ahri",
    championType: "Asesino y mago",
    championCost: 3150,
    imagen: "champ-ahri.jpg",
  },
  {
    championName: "Caitlyn",
    championType: "Tirador",
    championCost: 450,
    imagen: "champ-caitlyn.jpg",
  },
  {
    championName: "Camille",
    championType: "Luchador y Tanque",
    championCost: 4800,
    imagen: "champ-camille.jpg",
  },
  {
    championName: "Aatrox",
    championType: "Luchador y Tanque",
    championCost: 4800,
    imagen: "champ-aatrox.jpg",
  },
  {
    championName: "Jhin",
    championType: "Tirador y Mago",
    championCost: 4444,
    imagen: "champ-jhin.jpg",
  },
  {
    championName: "Akshan",
    championType: "Tirador y Asesino",
    championCost: 4800,
    imagen: "champ-akshan.jpg",
  },
  {
    championName: "Diana",
    championType: "Luchador y Mago",
    championCost: 450,
    imagen: "champ-diana.jpg",
  },
  {
    championName: "Ekko",
    championType: "Asesino y Luchador",
    championCost: 3150,
    imagen: "champ-ekko.jpg",
  },
  {
    championName: "Gwen",
    championType: "Asesino y Luchador",
    championCost: 4800,
    imagen: "champ-gwen.jpg",
  },
  {
    championName: "Heimerdinger",
    championType: "Mago y Apoyo",
    championCost: 3150,
    imagen: "champ-heimerdinger.jpg",
  },
  {
    championName: "Jayce",
    championType: "Tirador y Luchador",
    championCost: 4800,
    imagen: "champ-jayce.jpg",
  },
  {
    championName: "Leona",
    championType: "Apoyo y Tanque",
    championCost: 450,
    imagen: "champ-leona.jpg",
  },
  {
    championName: "Lux",
    championType: "Apoyo y Mago",
    championCost: 450,
    imagen: "champ-lux.jpg",
  },
  {
    championName: "Nami",
    championType: "Mago y Apoyo",
    championCost: 3150,
    imagen: "champ-nami.jpg",
  },
  {
    championName: "Singed",
    championType: "Luchador y Tanque",
    championCost: 4800,
    imagen: "champ-singed.jpg",
  },
  {
    championName: "Swain",
    championType: "Luchador y Mago",
    championCost: 3150,
    imagen: "champ-swain.jpg",
  },
  {
    championName: "Vi",
    championType: "Asesino y Luchador",
    championCost: 13,
    imagen: "champ-vi.jpg",
  },
  {
    championName: "Warwick",
    championType: "Luchador y Tanque",
    championCost: 450,
    imagen: "champ-warwick.jpg",
  },
  {
    championName: "Yuumi",
    championType: "Mago y Apoyo",
    championCost: 450,
    imagen: "champ-yuumi.jpg",
  },
  {
    championName: "Yasuo",
    championType: "Asesino y Luchador",
    championCost: 1350,
    imagen: "champ-yasuo.jpg",
  },
];

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          exact
          element={<Main greeting="Bienvenido a League of Legends!" />}
        />
        <Route
          path="/category/:id"
          element={<ItemListContainer champions={champsArray} />}
        />
        <Route
          path="/item/:championName"
          element={<ItemDetailContainer champions={champsArray} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
