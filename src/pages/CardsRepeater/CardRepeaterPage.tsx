import style from "./CardRepeaterPage.module.scss";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ICard } from "types/types";
import { MAIN_ROUTE } from "services/consts/route.consts";

import { HeaderSimple } from "components/index";
import CardRepeaterButton from "./CardRepeaterButtons/CardRepeaterButtons";

import { useGetAllCardsQuery } from "store/api/arlezu.api";

const CardRepeaterPage: React.FC = () => {
  const navigate = useNavigate();

  //получаем карточки со словами
  const { data = [] } = useGetAllCardsQuery();

  //для перехода между карточками используется локальное состояние "step", поскольку компонент не связан с другими через этот параметр
  let [step, setStep] = useState(0);

  //состояние, определяющее нажата ли кнопка "Показать ответ" для последующего сброса "word" и "sentence" в начальное положение для каждой карточки
  const [isAnswerClicked, setIsAnswerClicked] = useState(false);

  let cardsForRepeat: Array<number> = [];

  //заполняем массив с карточками для повторения, добавляя id нужной карточки
  data.map((card: ICard) => {
    cardsForRepeat = [...cardsForRepeat, card.id];
  });

  //показываем следующую карточку, иначе, если карточки закончились, переадресуем на главную страницу
  const showNextCard = () => {
    if (step < cardsForRepeat.length - 1) {
      setStep(++step);
    } else {
      navigate(MAIN_ROUTE);
    }
  };

  const showAnswer = () => {
    setIsAnswerClicked(true);
  };

  //после смены карточки возвращаем "word" и "sentence" в начальное положение
  useEffect(() => {
    setIsAnswerClicked(false);
  }, [step]);

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
