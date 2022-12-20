import { useEffect, useState, useContext } from "react";
import { DictionaryViewerItem } from "./DictionaryViewerItem/DictionaryViewerItem";
import { ICard } from "../../types/types";
import { HeaderSimple } from "../UI/HeaderSimple/HeaderSimple";
import { CardsContext } from "../../context";

interface DictionaryViewerTypes {
  step: number;
  setStep: (value: number) => void;
}

const DictionaryViewer: React.FC<DictionaryViewerTypes> = ({
  step,
  setStep,
}) => {
  const cards = useContext(CardsContext) as ICard[];

  //State for sentence`s translation
  const [sentenceTumbler, setSentenceTumbler] = useState<boolean>(false);

  //Showing the previous card
  const changeToPrevStep = () => {
    step <= cards.length - 1 && step > 0
      ? setStep(--step)
      : setStep(cards.length - 1);
  };

  //Showing the next card
  const changeToNextStep = () => {
    step < cards.length - 1 ? setStep(++step) : setStep(0);
  };

  //Changing the sentence`s translation after changing the card
  useEffect(() => {
    setSentenceTumbler(false);
  }, [step]);

  return (
    <div>
      <HeaderSimple />
      <DictionaryViewerItem
        changeToPrevStep={changeToPrevStep}
        changeToNextStep={changeToNextStep}
        step={step}
        sentenceTumbler={sentenceTumbler}
        setSentenceTumbler={setSentenceTumbler}
      />
    </div>
  );
};

export { DictionaryViewer };
