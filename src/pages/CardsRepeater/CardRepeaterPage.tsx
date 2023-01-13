import style from "./CardRepeaterPage.module.scss";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { GeneralContext } from "context/context";
import { ICard, IContext } from "types/types";
import { MAIN_ROUTE } from "services/consts/route.consts";

import { HeaderSimple } from "components/index";
import CardRepeaterButton from "./CardRepeaterButtons/CardRepeaterButtons";

import { useGetAllCardsQuery } from "store/api/arlezu.api";

const CardRepeaterPage: React.FC = () => {
  const navigate = useNavigate();
  const appContext = useContext(GeneralContext) as IContext;

  const { data } = useGetAllCardsQuery();

  const [isAnswerClicked, setIsAnswerClicked] = useState(false);
  let [step, setStep] = useState(0);
  let cardsForRepeat: Array<number> = [];

  data.map((card: ICard) => {
    cardsForRepeat = [...cardsForRepeat, card.id];
  });

  const showNextCard = () => {
    if (step < cardsForRepeat.length - 1) {
      setStep(++step);
    } else {
      navigate(MAIN_ROUTE);
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
      <HeaderSimple page={"Повторение слов"} />
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.textTop}>
            {isAnswerClicked ? (
              <p className={style.word}>
                {data[cardsForRepeat[step] - 1].word}
              </p>
            ) : (
              <p className={style.wordTranslation_big}>
                {data[cardsForRepeat[step] - 1].word_translation}
              </p>
            )}
          </div>

          <div className={style.img}>
            <img
              src={`./img/content-images/${
                data[cardsForRepeat[step] - 1].img
              }.jpg`}
            />
          </div>

          <div className={style.textBottom}>
            {isAnswerClicked ? (
              <p>{data[cardsForRepeat[step] - 1].sentence}</p>
            ) : (
              <p>{data[cardsForRepeat[step] - 1].sentence_translation}</p>
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
