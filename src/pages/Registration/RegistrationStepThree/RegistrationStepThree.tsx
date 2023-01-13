import style from "../RegistrationPage.module.scss";

import { CustomLink } from "components/CustomLink/CustomLink";

const RegistrationStepThree = () => {
  return (
    <div className={style.formContainer}>
      <h1 className={style.formTitle}>Всеее готово :-)</h1>
      <h2 className={style.formSubTitle}>Регистрация прошла успешно</h2>
      <form className={style.form}>
        <CustomLink to="/">Вперед!</CustomLink>
      </form>
    </div>
  );
};

export default RegistrationStepThree;
