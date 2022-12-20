import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import { DictionaryViewer } from "./components/DictionaryViewer/DictionaryViewer";
import { DictionaryList } from "./components/DictionaryList/DictionaryList";
import { CardRepeater } from "./components/CardsRepeater/CardsRepeater";
import { cardsContent } from "./cards-base";
import { InitialPage } from "./components/InitialPage/InitialPage";
import { SignUpForm } from "./components/SignUpForm/SignUpForm";
import { LogInForm } from "./components/LogInForm/LogInForm";
import { Layout } from "./components/Layout/Layout";
import { Settings } from "./components/additionalContent/Settings/Settings";
import { About } from "./components/additionalContent/About/About";
import { Instruction } from "./components/additionalContent/Instruction/Instruction";
import { Profile } from "./components/additionalContent/Profile/Profile";
import { Alphabet } from "./components/mainContent/Alphabet/Alphabet";
import { Grammar } from "./components/mainContent/Grammar/Grammar";
import { CardsContext } from "./context";

const App = () => {
  const [cardsArray, useCardsArray] = useState(cardsContent);
  const [step, setStep] = useState<number>(0);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <CardsContext.Provider value={cardsArray}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={<InitialPage isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
          <Route
            path="/cardslist"
            element={<DictionaryList setStep={setStep} />}
          />
          <Route
            path="/cardsviewer"
            element={<DictionaryViewer step={step} setStep={setStep} />}
          />
          <Route
            path="/cardsrepeater"
            element={<CardRepeater cards={cardsArray} />}
          />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/alphabet" element={<Alphabet />} />
          <Route path="/grammar" element={<Grammar />} />
        </Route>
      </Routes>
    </CardsContext.Provider>
  );
};

export { App };
