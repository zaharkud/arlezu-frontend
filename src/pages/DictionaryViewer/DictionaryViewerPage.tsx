import { useEffect, useState, useContext } from "react";

import { ICard, IContext } from "types/types";
import { HeaderSimple } from "components/index";
import { GeneralContext } from "context/context";

import DictionaryViewerElement from "./DictionaryViewerElement/DictionaryViewerElement";

const DictionaryViewerPage: React.FC = () => {
  const appContext = useContext(GeneralContext) as IContext;

  //State for sentence`s translation
  const [sentenceTumbler, setSentenceTumbler] = useState<boolean>(false);

  //Showing the previous card
  const changeToPrevStep = () => {
    appContext.step <= appContext.cards.length - 1 && appContext.step > 0
      ? appContext.setStep(--appContext.step)
      : appContext.setStep(appContext.cards.length - 1);
  };

  //Showing the next card
  const changeToNextStep = () => {
    appContext.step < appContext.cards.length - 1
      ? appContext.setStep(++appContext.step)
      : appContext.setStep(0);
  };

  //Changing the sentence`s translation after changing the card
  useEffect(() => {
    setSentenceTumbler(false);
  }, [appContext.step]);

  return (
    <div>
      <HeaderSimple page={"Словарь"} />
      <DictionaryViewerElement
        changeToPrevStep={changeToPrevStep}
        changeToNextStep={changeToNextStep}
        sentenceTumbler={sentenceTumbler}
        setSentenceTumbler={setSentenceTumbler}
      />
    </div>
  );
};

export default DictionaryViewerPage;
