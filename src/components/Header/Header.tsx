import style from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>
        <Link to="/">arlezu</Link>
      </h1>
    </header>
  );
};

export { Header };
