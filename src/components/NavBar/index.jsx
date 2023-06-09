import React from "react";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  return (
    <header className="container-header">
      <Link to="/" className="container-navBar-logo">
        <img
          src="../../images/logo_lol_encabezado.png"
          alt="Logo League of Legends"
          className="logo-container"
        />
        <p className="text-navBar">League of Legends</p>
      </Link>
      <nav className="header-container">
        <ul className="nav-container">
          <li className="list">
            <Link className="text-navBar" to="/category/TiendaDeCampeones">
              Tienda de campeones
            </Link>
          </li>
          <li className="list">
            <Link className="text-navBar" to="/category/Esport">
              Esport
            </Link>
          </li>
          <li className="list">
            <Link className="text-navBar" to="/category/Entretenimiento">
              Entretenimiento
            </Link>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
};

export default NavBar;
