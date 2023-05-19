import React from "react";
import CartWidget from "../CartWidget";
import "./styles.css";

const NavBar = () => {
  return (
    <header className="container-header">
      <div className="container-navBar-logo">
        <img
          src="../../images/logo_lol_encabezado.png"
          alt="Logo League of Legends"
          className="logo-container"
        />
        <p className="text-navBar">League of Legends</p>
      </div>
      <nav className="header-container">
        <ul className="nav-container">
          <li className="list">
            <a className="text-navBar" href="#">
              Tienda de campeones
            </a>
          </li>
          <li className="list">
            <a className="text-navBar" href="#">
              Esport
            </a>
          </li>
          <li className="list">
            <a className="text-navBar" href="#">
              Entretenimiento
            </a>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
};

export default NavBar;
