import { useState, useEffect } from "react";
import { db } from "./firebase/firebaseConfig";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Form from "./components/Form";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import Cart from "./components/Cart";

const App = () => {
  const [champsInCart, setChampsInCart] = useState([]);
  const [champsArray, setChampsArray] = useState([]);
  console.log("champsInCart", champsInCart);
  const getDatabase = async () => {
    const q = query(collection(db, "champions"));
    const querySnapshot = await getDocs(q);
    const docs = [];

    querySnapshot.forEach((doc) => docs.push(doc.data()));
    setChampsArray(docs);
  };

  useEffect(() => {
    getDatabase();
  }, []);

  if (!champsArray || !champsArray.length) return null;
  const addToCart = (champion) => {
    setChampsInCart([...champsInCart, champion]);
  };
  const setNewCart = (newCart) => setChampsInCart(newCart);
  const handleDeleteChampion = (champ) => {
    if (!champsInCart?.length) return null;
    const newChampsInCart = [...champsInCart];
    const index = newChampsInCart.findIndex(
      (champInCart) => champInCart.championName === champ.championName
    );

    if (index > -1) {
      newChampsInCart.splice(index, 1);
    }

    setNewCart(newChampsInCart);
  };
  const deleteCart = () => {
    setChampsInCart([]);
  };

  return (
    <Router>
      <NavBar champsInCart={champsInCart} deleteCart={deleteCart} handleDeleteChampion={handleDeleteChampion} />
      <Routes>
        <Route
          path="/"
          exact
          element={<Main greeting="Bienvenido a League of Legends!" />}
        />
        <Route
          path="/category/:id"
          element={
            <ItemListContainer
              champsInCart={champsInCart}
              champions={champsArray}
              addToCart={addToCart}
              handleDeleteChampion={handleDeleteChampion}
            />
          }
        />
        <Route
          path="/item/:championName"
          element={<ItemDetailContainer champions={champsArray} />}
        />
         <Route
          path="/cart"
          element={<Cart champsInCart={champsInCart} />}
        />
        <Route
          path="/formulario"
          element={<Form deleteCart={deleteCart} champsInCart={champsInCart} 
          />}
        />
      </Routes>
    </Router>
  );
};

export default App;
