import style from "../RegistrationPage.module.scss";
import { Input } from "components/Input/Input";

interface RegistrationStepTwoTypes {
  setActive: (value: string) => void;
}

const RegistrationStepTwo: React.FC<RegistrationStepTwoTypes> = ({
  setActive,
}) => {
  return (
    <div className={style.formContainer}>
      <h1 className={style.formTitle}>
        Добро пожаловать в <span>Arlezu!</span>
      </h1>
      <form className={style.formInput}>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Пароль" />
        <button
          className={style.continueButton}
          onClick={() => setActive("StepThree")}
        >
          Далее
        </button>
      </form>
    </div>
  );
};

export default RegistrationStepTwo;
