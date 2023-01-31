import React from "react";
// import iconoVolver from "../assets/statics/volver.png";
import { Link } from "react-router-dom";
import "../assets/Css/Header.css";

export default function Header() {
  return (
    <>
      <nav className="hero">
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
            <Link to="/Reservas" className="nav__link">Reservas</Link>
          </li>
          <li className="nav__item">
            <Link to="/Beneficios" className="nav__link">Beneficios</Link>
          </li>
          <li className="nav__item">
            <Link to="/Contacto" className="nav__link">Contacto</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
