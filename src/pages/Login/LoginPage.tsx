import style from "./LoginPage.module.scss";

import { Header, Input, CustomLink } from "components/index";
import { MAIN_ROUTE } from "services/consts/route.consts";

import { useAppSelector, useAppDispatch } from "store";
import { changeIsAuth } from "store/settingsSlice";

const LoginPage = () => {
  const settings = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Header />
      <div className={style.formContainer}>
        <h1 className={style.formTitle}>
          <span>Рады</span> снова видеть!
        </h1>
        <form className={style.form}>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Пароль" />
          <CustomLink
            to={MAIN_ROUTE}
            onClick={() => dispatch(changeIsAuth(true))}
          >
            Войти
          </CustomLink>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
