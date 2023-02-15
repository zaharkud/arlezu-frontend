import style from "./LoginPage.module.scss";

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header, Input, Button } from "components/index";
import { MAIN_ROUTE } from "services/consts/route.consts";

import { useAppDispatch } from "store";
import { changeIsAuth } from "store/settingsSlice";
import { setUser } from "store/authSlice";
import { useLoginMutation } from "store/api/authApiSlice";

interface loginDataTypes {
  email: string;
  password: string;
}

const loginData: loginDataTypes = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //получаем функцию логина из запроса к серверу через rtk query
  const [login, { data, isSuccess, isLoading, error, isError }] =
    useLoginMutation();

  //переменная для хранения почты и пароля
  const [formValue, setFormValue] = useState<loginDataTypes>(loginData);
  const { email, password } = formValue;

  //ссылки на поля формы
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  //состояние и ссылка на текстовый блок для вывода ошибок, полученных с сервера
  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef<HTMLParagraphElement>(null);

  //функция-обработчик для формы
  const formHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    //проверка: введена ли почта
    if (emailInput?.current?.value == "") {
      emailInput.current.placeholder = "Введите email";
      return;
    }
    //проверка: введен ли пароль
    if (passwordInput?.current?.value == "") {
      passwordInput.current.placeholder = "Введите пароль";
      return;
    }
    //отправляем данные на сервер
    await login({ email, password });
  };

  //! заглушка - решить проблему
  const continueBtnHandler = () => {};

  //универсальная функция для записи пароля и почты в один стейт
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    console.log(formValue);
  };

  //наводим фокус на поле с почтой
  useEffect(() => {
    emailInput?.current?.focus();
  }, []);

  //в случае успешной авторизации передаем почту и пароль в хранилище
  useEffect(() => {
    if (isSuccess) {
      dispatch(changeIsAuth(true));
      dispatch(setUser({ email: data.user.email, token: data.accessToken }));
      navigate(MAIN_ROUTE);
    }
  }, [isSuccess]);

  return (
    <div>
      <Header />
      <div className={style.formContainer}>
        <p ref={errRef}>{errMsg}</p>

        <h1 className={style.formTitle}>
          <span>Рады</span> снова видеть!
        </h1>

        <form className={style.form} onSubmit={formHandler}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            refProp={emailInput}
            value={email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Пароль"
            refProp={passwordInput}
            value={password}
            onChange={handleChange}
          />
          <Button onClick={continueBtnHandler}>Войти</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
