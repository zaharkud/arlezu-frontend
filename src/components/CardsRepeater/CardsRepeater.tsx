import React from "react";
import { useState } from "react";
import styles from "./CardsRepeater.module.scss";
import { useNavigate } from "react-router-dom";
import { RepeatButtons } from "./RepeatButtons/RepeatButtons";
import { useEffect } from "react";
import { ICard } from "../../types/types";

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
      <div className={styles.card}>
        <div className={styles.textTop}>
          {isAnswerClicked ? (
            <p className={styles.word}>
              {cards[cardsForRepeat[step] - 1].word}
            </p>
          ) : (
            <p className={styles.wordTranslation_big}>
              {cards[cardsForRepeat[step] - 1].wordTranslation}
            </p>
          )}
        </div>

        <div className={styles.img}>
          {<img src={cards[cardsForRepeat[step] - 1].imgSrc} />}
        </div>

        <div className={styles.textBottom}>
          {isAnswerClicked ? (
            <p className={styles.sentence}>
              {cards[cardsForRepeat[step] - 1].sentenceTranslation}
            </p>
          ) : (
            <p className={styles.sentence}>
              {cards[cardsForRepeat[step] - 1].sentence}
            </p>
          )}
        </div>
      </div>
      <div className={styles.buttons}>
        {isAnswerClicked ? (
          <RepeatButtons showNextCard={showNextCard} />
        ) : (
          <button className={styles.showAnswerBtn} onClick={showAnswer}>
            Показать ответ
          </button>
        )}
      </div>
    </div>
  );
};

export { CardRepeater };
