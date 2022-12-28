import style from "./MainAuthInfo.module.scss";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "services/consts/route.consts";

const MainAuthInfo: React.FC = () => {
  return (
    <div className={style.authContainer}>
      <div className={style.authButtons}>
        <Link className={style.signUp} to={REGISTRATION_ROUTE}>
          Создать аккаунт
        </Link>
        <Link className={style.logIn} to={LOGIN_ROUTE}>
          Войти
        </Link>
      </div>
    </div>
  );
};

export default MainAuthInfo;
