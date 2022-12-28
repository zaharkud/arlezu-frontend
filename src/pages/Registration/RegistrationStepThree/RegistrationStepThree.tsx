import style from "../RegistrationPage.module.scss";
import { Link } from "react-router-dom";

const RegistrationStepThree = () => {
  return (
    <div className={style.formContainer}>
      <h1 className={style.formTitle}>Хьюстон, мы готовы :-)</h1>
      <h2 className={style.formSubTitle}>Регистрация прошла успешно</h2>
      <form className={style.formInput}>
        <Link className={style.continueButton} to="/">
          Вперед!
        </Link>
      </form>
    </div>
  );
};

export default RegistrationStepThree;
