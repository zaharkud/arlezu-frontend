import { Header } from "components/index";

import { useState } from "react";

import RegistrationStepOne from "./RegistrationStepOne/RegistrationStepOne";
import RegistrationStepTwo from "./RegistrationStepTwo/RegistrationStepTwo";
import RegistrationStepThree from "./RegistrationStepThree/RegistrationStepThree";

interface registartionDataTypes {
  name: string;
  password: string;
  email: string;
}

const registartionData: registartionDataTypes = {
  name: "",
  email: "",
  password: "",
};

const RegistrationPage = () => {
  //состаяние для переключение между несколькими страницами процесса регистрации
  const [activePage, setActivePage] = useState("StepOne");

  //состояние для хранения почтыб пароля и имени пользователя
  const [formValue, setFormValue] = useState(registartionData);
  const { name, email, password } = formValue;

  //универсальная функция для записи пароля и почты в один стейт
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    console.log(formValue);
  };

  return (
    <div>
      <Header />
      {activePage === "StepOne" && (
        <RegistrationStepOne
          setActivePage={setActivePage}
          nameData={name}
          handleChange={handleChange}
        />
      )}
      {activePage === "StepTwo" && (
        <RegistrationStepTwo
          setActivePage={setActivePage}
          emailData={email}
          passwordData={password}
          nameData={name}
          handleChange={handleChange}
        />
      )}
      {activePage === "StepThree" && <RegistrationStepThree />}
    </div>
  );
};

export default RegistrationPage;
