import style from "../RegistrationPage.module.scss";

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
      <h2 className={style.formSubTitle}></h2>
      <form className={style.formInput}>
        <input type="text" placeholder="Как тебя зовут?" />
        <button
          className={style.continueButton}
          onClick={() => setActive("StepTwo")}
        >
          Далее
        </button>
      </form>
    </div>
  );
};

export default RegistrationStepOne;
