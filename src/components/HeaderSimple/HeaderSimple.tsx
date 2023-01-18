import style from "./HeaderSimple.module.scss";
import { useNavigate } from "react-router-dom";
import { ArrowButtonLeft } from "components/ArrowButton/ArrowButton";

interface HeaderSimpleTypes {
  page: string;
}

const HeaderSimple = ({ page = "page" }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <header className={style.header}>
      <ArrowButtonLeft onClick={goBack}>вернуться назад</ArrowButtonLeft>
      <div className={style.currentPage}>{page}</div>
    </header>
  );
};

export { HeaderSimple };
