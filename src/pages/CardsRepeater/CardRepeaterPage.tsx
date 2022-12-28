import style from "./CardRepeaterPage.module.scss";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { GeneralContext } from "context/context";
import { ICard, IContext } from "types/types";
import { HeaderSimple } from "components/index";

import CardRepeaterButton from "./CardRepeaterButtons/CardRepeaterButtons";

const CardRepeaterPage: React.FC = () => {
  const navigate = useNavigate();
  const appContext = useContext(GeneralContext) as IContext;

  const [isAnswerClicked, setIsAnswerClicked] = useState(false);
  let [step, setStep] = useState(0);
  let cardsForRepeat: Array<number> = [];

  appContext.cards.map((card: ICard) => {
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
                {appContext.cards[cardsForRepeat[step] - 1].word}
              </p>
            ) : (
              <p className={style.wordTranslation_big}>
                {appContext.cards[cardsForRepeat[step] - 1].wordTranslation}
              </p>
            )}
          </div>

          <div className={style.img}>
            {<img src={appContext.cards[cardsForRepeat[step] - 1].imgSrc} />}
          </div>

          <div className={style.textBottom}>
            {isAnswerClicked ? (
              <p>
                {appContext.cards[cardsForRepeat[step] - 1].sentenceTranslation}
              </p>
            ) : (
              <p>{appContext.cards[cardsForRepeat[step] - 1].sentence}</p>
            )}
          </div>
        </div>
      </div>

      <div className={style.buttons}>
        {isAnswerClicked ? (
          <CardRepeaterButton showNextCard={showNextCard} />
        ) : (
          <button className={style.showAnswerBtn} onClick={showAnswer}>
            Показать ответ
          </button>
        )}
      </div>
    </div>
  );
};

export default CardRepeaterPage;
