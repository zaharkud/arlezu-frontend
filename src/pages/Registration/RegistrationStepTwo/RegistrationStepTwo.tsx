import style from "../RegistrationPage.module.scss";
import { Input, Button } from "components/index";

import { useAppSelector, useAppDispatch } from "store";
import { changeIsAuth } from "store/settingsSlice";

interface RegistrationStepTwoTypes {
  setActive: (value: string) => void;
}

const RegistrationStepTwo: React.FC<RegistrationStepTwoTypes> = ({
  setActive,
}) => {
  const settings = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const ContinueBtn = () => {
    setActive("StepThree");
    dispatch(changeIsAuth(true));
  };

  return (
    <div className={style.formContainer}>
      <h1 className={style.formTitle}>
        Добро пожаловать в <span>Arlezu!</span>
      </h1>
      <form className={style.form}>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Пароль" />
        <Button onClick={ContinueBtn}>Далее</Button>
      </form>
    </div>
  );
};

export default RegistrationStepTwo;
