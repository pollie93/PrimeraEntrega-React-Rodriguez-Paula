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

const App = () => {
  const [champsInCart, setChampsInCart] = useState([]);
  const [champsArray, setChampsArray] = useState([]);

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

  const deleteCart = () => {
    setChampsInCart([]);
  };

  return (
    <Router>
      <NavBar champsInCart={champsInCart} deleteCart={deleteCart} />
      <Routes>
        <Route
          path="/"
          exact
          element={<Main greeting="Bienvenido a League of Legends!" />}
        />
        <Route
          path="/category/:id"
          element={
            <ItemListContainer champions={champsArray} addToCart={addToCart} />
          }
        />
        <Route
          path="/item/:championName"
          element={<ItemDetailContainer champions={champsArray} />}
        />
        <Route
          path="/formulario"
          element={<Form champsInCart={champsInCart} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
