import { Header } from "components/index";

import { useState } from "react";

import RegistrationStepOne from "./RegistrationStepOne/RegistrationStepOne";
import RegistrationStepTwo from "./RegistrationStepTwo/RegistrationStepTwo";
import RegistrationStepThree from "./RegistrationStepThree/RegistrationStepThree";

const RegistrationPage = () => {
  const [active, setActive] = useState("StepOne");

  return (
    <div>
      <Header />
      {active === "StepOne" && <RegistrationStepOne setActive={setActive} />}
      {active === "StepTwo" && <RegistrationStepTwo setActive={setActive} />}
      {active === "StepThree" && <RegistrationStepThree />}
    </div>
  );
};

export default RegistrationPage;
