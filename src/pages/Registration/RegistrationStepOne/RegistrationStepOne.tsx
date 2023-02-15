import style from "../RegistrationPage.module.scss";
import { Input, Button } from "components";
import { useEffect, useRef } from "react";

interface RegistrationStepOneTypes {
  setActivePage: (value: string) => void;
  nameData: string;
  handleChange: (arg: any) => void;
}

const RegistrationStepOne: React.FC<RegistrationStepOneTypes> = ({
  setActivePage,
  nameData,
  handleChange,
}) => {
  const nameInput = useRef<HTMLInputElement>(null);

  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  //если введено имя пользователя, разрешаем переход на следующий этап регистрации
  const continueBtnHandler = () => {
    if (nameInput?.current?.value != "") {
      setActivePage("StepTwo");
    } else {
      nameInput.current.placeholder = "Введите имя";
    }
  };

  //наводим фокус на поле с именем
  useEffect(() => {
    nameInput?.current?.focus();
  }, []);

  return (
    <div className={style.formContainer}>
      <h1 className={style.formTitle}>
        Добро пожаловать в <span>Arlezu!</span>
      </h1>
      <form className={style.form} onSubmit={formHandler}>
        <Input
          type="text"
          name="name"
          placeholder="Как тебя зовут?"
          value={nameData}
          onChange={handleChange}
          refProp={nameInput}
        />

        <Button onClick={continueBtnHandler}>Далее</Button>
      </form>
    </div>
  );
};

export default RegistrationStepOne;
