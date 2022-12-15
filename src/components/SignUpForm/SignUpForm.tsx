import style from "./SignUpForm.module.scss";
import { Header } from "../Header/Header";
import { SignUpStepOne } from "./SignUpStepOne/SignUpStepOne";
import { SignUpStepTwo } from "./SignUpStepTwo/SignUpStepTwo";
import { SignUpStepThree } from "./SignUpStepThree/SignUpStepThree";
import { useState } from "react";

const SignUpForm = () => {
  const [active, setActive] = useState("StepOne");

  return (
    <div>
      <Header />
      {active === "StepOne" && <SignUpStepOne setActive={setActive} />}
      {active === "StepTwo" && <SignUpStepTwo setActive={setActive} />}
      {active === "StepThree" && <SignUpStepThree />}
    </div>
  );
};

export { SignUpForm };
