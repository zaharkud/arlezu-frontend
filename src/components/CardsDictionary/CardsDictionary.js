import { useEffect, useState } from "react";

import CardForDictionary from "./CardForDictionary/CardForDictionary";

export default function ({ cards, step, setStep }) {

  //State for sentence`s translation
  const [sentenceTumbler, setSentenceTumbler] = useState(false);

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
    <CardForDictionary
      changeToPrevStep={changeToPrevStep}
      changeToNextStep={changeToNextStep}
      cards={cards}
      step={step}
      sentenceTumbler={sentenceTumbler}
      setSentenceTumbler={setSentenceTumbler}
    />

  );
}
