import style from "./LogInForm.module.scss";
import { Header } from "../UI/Header/Header";
import { Link } from "react-router-dom";

const LogInForm = () => {
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
          <Link className={style.continueButton} to="/">
            Войти
          </Link>
        </form>
      </div>
    </div>
  );
};

export { LogInForm };
