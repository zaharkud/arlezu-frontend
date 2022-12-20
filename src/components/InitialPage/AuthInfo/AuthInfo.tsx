import style from "./AuthInfo.module.scss";
import { Link } from "react-router-dom";

interface AuthInfoTypes {
  setIsAuth: (value: boolean) => void;
}

const AuthInfo: React.FC<AuthInfoTypes> = ({ setIsAuth }) => {
  return (
    <div className={style.authContainer}>
      <div className={style.authButtons}>
        <Link className={style.signUp} to="/signup">
          Создать аккаунт
        </Link>
        <Link
          className={style.logIn}
          to="/login"
          onClick={() => setIsAuth(true)}
        >
          Войти
        </Link>
      </div>
    </div>
  );
};

export { AuthInfo };
