import React from "react";
// import iconoVolver from "../assets/statics/volver.png";
import { Link } from "react-router-dom";
import "../assets/Css/Header.css";
import menuHambur from "../assets/Statics/menu.svg"
import logoNav from "../assets/Statics/logocharo.png"



export default function Header() {

  
  return (
    <>
    <div className="hero">
      <nav className="nav container container--hero">
        <a> <img src={logoNav} alt="Logo" className="nav__logo" /></a>

        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link"> Home </Link>
          </li>
          <li className="nav__item">
            <Link to="/Somos" className="nav__link"> Somos </Link>
          </li>
          <li className="nav__item">
            <Link to="/Servicios" className="nav__link"> Servicios </Link>
          </li>
          <li className="nav__item">
            <Link to="/Salon" className="nav__link">Salon</Link>
          </li>
          <li className="nav__item">
            <Link to="/Reserva" className="nav__link">Reservas</Link>
          </li>
          <li className="nav__item">
            <Link to="/Beneficios" className="nav__link">Beneficios</Link>
          </li>
          <li className="nav__item">
            <Link to="/Contacto" className="nav__link">Contacto</Link>
          </li>
        </ul>
        <a><img src={menuHambur} alt="Menu Hamb" className="nav__menu"/></a>
      </nav>
      </div>
    </>
  );
}
