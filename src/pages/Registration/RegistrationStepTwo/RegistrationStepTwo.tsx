import style from "../RegistrationPage.module.scss";
import { Input, Button } from "components/index";

import { useAppDispatch } from "store";
import { changeIsAuth } from "store/settingsSlice";
import { useEffect, useRef } from "react";
import { useRegistrationMutation } from "store/api/authApiSlice";

interface RegistrationStepTwoTypes {
  setActivePage: (value: string) => void;
  emailData: string;
  passwordData: string;
  handleChange: (arg: any) => void;
  nameData: string;
}

const RegistrationStepTwo: React.FC<RegistrationStepTwoTypes> = ({
  setActivePage,
  emailData,
  passwordData,
  handleChange,
  nameData,
}) => {
  const dispatch = useAppDispatch();

  //получаем функцию регистрации для отправки данных на сервер
  const [registration, { data, isSuccess, isLoading, error, isError }] =
    useRegistrationMutation();

  //ссылки на поля формы
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  //если введены почта и пароль, производим регистрацию
  const formHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailInput?.current?.value == "") {
      emailInput.current.placeholder = "Введите email";
      return;
    }
    if (passwordInput?.current?.value == "") {
      passwordInput.current.placeholder = "Введите пароль";
      return;
    }
    //отправляем данные на сервер
    await registration({
      name: nameData,
      email: emailData,
      password: passwordData,
    });
  };

  //! заглушка - решить проблему
  const continueBtnHandler = () => {};

  //наводи фокус на поле с почтой
  useEffect(() => {
    emailInput?.current?.focus();
  }, []);

  //если получен ответ с сервера об успешеной регистрации, переходим на последнюю страницу регистрации и сохраняем данные в хранилище
  useEffect(() => {
    if (isSuccess) {
      dispatch(changeIsAuth(true));
      setActivePage("StepThree");
    }
  }, [isSuccess]);

  return (
    <div className={style.formContainer}>
      <h1 className={style.formTitle}>
        Добро пожаловать в <span>Arlezu!</span>
      </h1>
      <form className={style.form} onSubmit={formHandler}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={emailData}
          onChange={handleChange}
          refProp={emailInput}
        />
        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          value={passwordData}
          onChange={handleChange}
          refProp={passwordInput}
        />
        <Button onClick={continueBtnHandler}>Далее</Button>
      </form>
    </div>
  );
};

export default RegistrationStepTwo;
