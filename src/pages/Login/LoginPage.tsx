import style from "./LoginPage.module.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { Header } from "components/index";
import { GeneralContext } from "context/context";
import { MAIN_ROUTE } from "services/consts/route.consts";
import { IContext } from "types/types";
import { Input } from "components/Input/Input";

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
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Пароль" />
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
