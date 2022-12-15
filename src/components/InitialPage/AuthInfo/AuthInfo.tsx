import style from "./AuthInfo.module.scss";
import { Link } from "react-router-dom";

interface AuthInfoTypes {
  setIsAuth: (value: boolean) => void;
}

const AuthInfo: React.FC<AuthInfoTypes> = ({ setIsAuth }) => {
  return (
    <div className={style.authContainer}>
      <div className={style.authButtons}>
        <Link className={style.signUp} to="/Register">
          Создать аккаунт
        </Link>
        <Link className={style.logIn} to="/" onClick={() => setIsAuth(true)}>
          Войти
        </Link>
      </div>
    </div>
  );
};

export { AuthInfo };
