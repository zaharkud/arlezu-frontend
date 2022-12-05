import React from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>
        <Link to="/">Arlezu</Link>
      </h1>
      <nav>
        <ul className={style.menu}>
          <li>
            <Link to="/CardRepeater">Учить</Link>
          </li>
          <li>
            <Link to="/">Словарь</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
