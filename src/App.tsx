import "assets/style/App.scss";
import { useState } from "react";

import { GeneralContext } from "context/context";
import { ICard } from "types/types";
import { cardsContent } from "cards-base";

import AppRouter from "services/routing/AppRouter";

const App = () => {
  const [cardsArray, setCardsArray] = useState<ICard[]>(cardsContent);
  const [step, setStep] = useState<number>(0);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const contextValue = {
    cards: cardsArray,
    step,
    setStep,
    isAuth,
    setIsAuth,
  };

  return (
    <GeneralContext.Provider value={contextValue}>
      <div className="app">
        <div className="wrapper">
          <AppRouter />
        </div>
      </div>
    </GeneralContext.Provider>
  );
};

export default App;
