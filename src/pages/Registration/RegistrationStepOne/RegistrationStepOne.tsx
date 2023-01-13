import style from "../RegistrationPage.module.scss";
import { Input, Button } from "components";

interface RegistrationStepOneTypes {
  setActive: (value: string) => void;
}

const RegistrationStepOne: React.FC<RegistrationStepOneTypes> = ({
  setActive,
}) => {
  return (
    <div className={style.formContainer}>
      <h1 className={style.formTitle}>
        Добро пожаловать в <span>Arlezu!</span>
      </h1>
      <form className={style.form}>
        <Input type="text" placeholder="Как тебя зовут?" />
        <Button onClick={() => setActive("StepTwo")}>Далее</Button>
      </form>
    </div>
  );
};

export default RegistrationStepOne;
