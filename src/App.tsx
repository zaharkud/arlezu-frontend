import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import { Header } from "./components/Header/Header";
import { CardListItem } from "./components/CardList/CardListItem/CardListItem";
import { CardList } from "./components/CardList/CardList";
import { CardRepeater } from "./components/CardsRepeater/CardsRepeater";
import { ICard } from "./types/types";
//import { CardContext } from "./context";
import { cardsContent } from "./cards-base";
import { InitialPage } from "./components/InitialPage/InitialPage";

const App = () => {
  //const cardsArray = useContext(cardsContent);
  const [cardsArray, useCardsArray] = useState(cardsContent);
  const [step, setStep] = useState<number>(0);

  return (
    <div className="wrapper">
      <div className="app">
        <>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<InitialPage />} />
              <Route
                path="/CardList"
                element={<CardList cards={cardsArray} setStep={setStep} />}
              />
              <Route
                path="/CardListItem"
                element={
                  <CardListItem
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
            </Routes>
          </main>
        </>
      </div>
    </div>
  );
};

export { App };
