import React from "react";
import { useState } from "react";
import style from "./CardsRepeater.module.scss";
import { useNavigate } from "react-router-dom";
import { RepeatButtons } from "./RepeatButtons/RepeatButtons";
import { useEffect } from "react";
import { ICard } from "../../types/types";
import { HeaderSimple } from "../HeaderSimple/HeaderSimple";

interface CardsRepeaterTypes {
  cards: ICard[];
}

const CardRepeater: React.FC<CardsRepeaterTypes> = ({ cards }) => {
  const navigate = useNavigate();

  const [isAnswerClicked, setIsAnswerClicked] = useState(false);
  let cardsForRepeat: Array<number> = [];
  let [step, setStep] = useState(0);

  cards.map((card: ICard) => {
    if (card.repeatTime > -1) cardsForRepeat = [...cardsForRepeat, card.id];
  });

  const showNextCard = () => {
    if (step < cardsForRepeat.length - 1) {
      setStep(++step);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    setIsAnswerClicked(false);
  }, [step]);

  const showAnswer = () => {
    setIsAnswerClicked(true);
  };

  return (
    <div>
      <HeaderSimple />
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.textTop}>
            {isAnswerClicked ? (
              <p className={style.word}>
                {cards[cardsForRepeat[step] - 1].word}
              </p>
            ) : (
              <p className={style.wordTranslation_big}>
                {cards[cardsForRepeat[step] - 1].wordTranslation}
              </p>
            )}
          </div>

          <div className={style.img}>
            {<img src={cards[cardsForRepeat[step] - 1].imgSrc} />}
          </div>

          <div className={style.textBottom}>
            {isAnswerClicked ? (
              <p>{cards[cardsForRepeat[step] - 1].sentenceTranslation}</p>
            ) : (
              <p>{cards[cardsForRepeat[step] - 1].sentence}</p>
            )}
          </div>
        </div>
      </div>

      <div className={style.buttons}>
        {isAnswerClicked ? (
          <RepeatButtons showNextCard={showNextCard} />
        ) : (
          <button className={style.showAnswerBtn} onClick={showAnswer}>
            Показать ответ
          </button>
        )}
      </div>
    </div>
  );
};

export { CardRepeater };
