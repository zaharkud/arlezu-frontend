import "assets/style/App.scss";
import { useEffect, useState } from "react";

import { GeneralContext } from "context/context";
import { ICard } from "types/types";
import { cardsContent } from "cards-base";

import { useGetAllCardsQuery } from "store/api/arlezu.api";

import AppRouter from "services/routing/AppRouter";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const { isLoading, isError, data } = useGetAllCardsQuery();

  const [cardsArray, setCardsArray] = useState<ICard[]>(cardsContent);
  const [step, setStep] = useState<number>(0);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  console.log(data);

  const contextValue = {
    cards: cardsArray,
    step,
    setStep,
    isAuth,
    setIsAuth,
  };

  return (
    <BrowserRouter>
      <GeneralContext.Provider value={contextValue}>
        <div className="app">
          <div className="wrapper">
            {/* {isError && <h1>ERROR FETCHING CARDS</h1>} */}
            <AppRouter />
          </div>
        </div>
      </GeneralContext.Provider>
    </BrowserRouter>
  );
};

export default App;
