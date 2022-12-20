import style from "./HeaderSimple.module.scss";
import { Link } from "react-router-dom";

const HeaderSimple = () => {
  return (
    <header className={style.header}>
      <div className={style.buttons}>
        <Link className={style.backBtn} to="/"></Link>
      </div>
    </header>
  );
};

export { HeaderSimple };
