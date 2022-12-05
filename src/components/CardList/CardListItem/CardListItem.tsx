import { useEffect, useState } from "react";
import { CardListItemContent } from "./CardListItemContent/CardListItemContent";
import { ICard } from "../../../types/types";

interface CardListItemTypes {
  cards: ICard[];
  step: number;
  setStep: (value: number) => void;
}

const CardListItem: React.FC<CardListItemTypes> = ({
  cards,
  step,
  setStep,
}) => {
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
    <CardListItemContent
      changeToPrevStep={changeToPrevStep}
      changeToNextStep={changeToNextStep}
      cards={cards}
      step={step}
      sentenceTumbler={sentenceTumbler}
      setSentenceTumbler={setSentenceTumbler}
    />
  );
};

export { CardListItem };
