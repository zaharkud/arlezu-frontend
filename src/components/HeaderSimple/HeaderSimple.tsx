import style from "./HeaderSimple.module.scss";
import { useNavigate } from "react-router-dom";

interface HeaderSimpleTypes {
  page: string;
}

const HeaderSimple = ({ page = "page" }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <header className={style.header}>
      <button className={style.backBtn} onClick={goBack}></button>
      <div className={style.currentPage}>{page}</div>
    </header>
  );
};

export { HeaderSimple };
