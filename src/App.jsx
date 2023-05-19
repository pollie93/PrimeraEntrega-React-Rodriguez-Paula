import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./styles.css";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a League of Legends!" />
    </>
  );
};

export default App;
