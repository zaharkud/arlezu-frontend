import style from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import {
  ABOUTE_ROUTE,
  INSTRUCTION_ROUTE,
  MAIN_ROUTE,
  PROFILE_ROUTE,
  SETTINGS_ROUTE,
} from "services/consts/route.consts";

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
          <Link to={MAIN_ROUTE}>arlezu</Link>
        </h1>

        <ul>
          <li>
            <Link to={MAIN_ROUTE}>Главная</Link>
          </li>
          <li>
            <Link to={INSTRUCTION_ROUTE}>Как пользоваться?</Link>
          </li>
          <li>
            <Link to={SETTINGS_ROUTE}>Настройки</Link>
          </li>
          <li>
            <Link to={PROFILE_ROUTE}>Профиль</Link>
          </li>
          <li>
            <Link to={ABOUTE_ROUTE}>О приложении</Link>
          </li>
        </ul>
      </nav>

      <Link to={SETTINGS_ROUTE} className={style.settingsButton}></Link>
    </header>
  );
};

export { Header };
