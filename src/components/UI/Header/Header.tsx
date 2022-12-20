import style from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  return (
    <header className={style.header}>
      <div
        className={`${style.burgerButton} ${
          activeMenu ? style.burgerButtonActive : ""
        }`}
        onClick={() => setActiveMenu(!activeMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`${style.menu} ${activeMenu ? style.menuActive : ""}`}>
        <h1 className={style.title}>
          <Link to="/">arlezu</Link>
        </h1>

        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/instruction">Как пользоваться?</Link>
          </li>
          <li>
            <Link to="/settings">Настройки</Link>
          </li>
          <li>
            <Link to="/profile">Профиль</Link>
          </li>
          <li>
            <Link to="/about">О приложении</Link>
          </li>
        </ul>
      </nav>

      <Link to="/settings" className={style.settingsButton}></Link>
    </header>
  );
};

export { Header };
