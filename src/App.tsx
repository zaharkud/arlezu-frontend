import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import { DictionaryViewer } from "./components/DictionaryViewer/DictionaryViewer";
import { DictionaryList } from "./components/DictionaryList/DictionaryList";
import { CardRepeater } from "./components/CardsRepeater/CardsRepeater";
import { cardsContent } from "./cards-base";
import { InitialPage } from "./components/InitialPage/InitialPage";
import { SignUpForm } from "./components/SignUpForm/SignUpForm";

const App = () => {
  //const cardsArray = useContext(cardsContent);
  const [cardsArray, useCardsArray] = useState(cardsContent);
  const [step, setStep] = useState<number>(0);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <div className="wrapper">
      <div className="app">
        <>
          <main>
            <Routes>
              <Route
                path="/"
                element={<InitialPage isAuth={isAuth} setIsAuth={setIsAuth} />}
              />
              <Route
                path="/CardList"
                element={
                  <DictionaryList cards={cardsArray} setStep={setStep} />
                }
              />
              <Route
                path="/CardListItem"
                element={
                  <DictionaryViewer
                    cards={cardsArray}
                    step={step}
                    setStep={setStep}
                  />
                }
              />
              <Route
                path="/CardRepeater"
                element={<CardRepeater cards={cardsArray} />}
              />
              <Route path="/Register" element={<SignUpForm />} />
            </Routes>
          </main>
        </>
      </div>
    </div>
  );
};

export { App };
