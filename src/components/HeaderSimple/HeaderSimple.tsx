import style from "./HeaderSimple.module.scss";
import { Link, useNavigate } from "react-router-dom";

const HeaderSimple = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <header className={style.header}>
      <div className={style.buttons}>
        <button className={style.backBtn} onClick={goBack}></button>
      </div>
    </header>
  );
};

export { HeaderSimple };
