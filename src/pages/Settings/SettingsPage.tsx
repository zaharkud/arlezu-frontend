import { useContext } from "react";
import { GeneralContext } from "context/context";
import { IContext } from "types/types";

import { Header } from "components/index";

const SettingsPage = () => {
  const appContext = useContext(GeneralContext) as IContext;

  const LogOut = () => {
    appContext.setIsAuth(false);
  };

  return (
    <div>
      <Header />
      Settings
      <button onClick={LogOut}>Выйти</button>
    </div>
  );
};

export default SettingsPage;
