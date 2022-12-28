import style from "./LoginPage.module.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { Header } from "components/index";
import { GeneralContext } from "context/context";
import { MAIN_ROUTE } from "services/consts/route.consts";
import { IContext } from "types/types";

const LoginPage = () => {
  const appContext = useContext(GeneralContext) as IContext;

  return (
    <div>
      <Header />
      <div className={style.formContainer}>
        <h1 className={style.formTitle}>
          <span>Рады</span> снова видеть!
        </h1>
        <form className={style.formInput}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Пароль" />
          <Link
            className={style.continueButton}
            to={MAIN_ROUTE}
            onClick={() => appContext.setIsAuth(true)}
          >
            Войти
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
