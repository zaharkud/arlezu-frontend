import style from "./CardRepeaterPage.module.scss";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ICard } from "types/types";
import { MAIN_ROUTE } from "services/consts/route.consts";

import { HeaderSimple } from "components/index";
import CardRepeaterButton from "./CardRepeaterButtons/CardRepeaterButtons";

import { jwtDecode } from "jwt-decode";

import {
  useGetAllCardsQuery,
  useGetActiveCardsQuery,
} from "store/api/arlezu.api";

import { useAppSelector } from "store";

const CardRepeaterPage: React.FC = () => {
  const navigate = useNavigate();

  const token = useAppSelector((state) => state.auth.token) || "";
  const tokenUser = JSON.parse(JSON.stringify(jwtDecode(token)));

  //получаем карточки со словами
  const { data: cardsForRepeat = [], isSuccess } = useGetActiveCardsQuery(
    tokenUser.id
  );

  //для перехода между карточками используется локальное состояние "step", поскольку компонент не связан с другими через этот параметр
  let [step, setStep] = useState(0);

  //состояние, определяющее нажата ли кнопка "Показать ответ" для последующего сброса "word" и "sentence" в начальное положение для каждой карточки
  const [isAnswerClicked, setIsAnswerClicked] = useState(false);

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
      {isSuccess ? (
        cardsForRepeat.lenght > 0 ? (
          activeCardRepeater(
            cardsForRepeat,
            step,
            isAnswerClicked,
            showAnswer,
            showNextCard
          )
        ) : (
          emptyCardRepeater()
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default CardRepeaterPage;

const activeCardRepeater = (
  cardsForRepeat: ICard[],
  step: number,
  isAnswerClicked: boolean,
  showAnswer: () => void,
  showNextCard: () => void
) => {
  return (
    <div>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.textTop}>
            {isAnswerClicked ? (
              <p className={style.word}>{cardsForRepeat[step].word}</p>
            ) : (
              <p className={style.wordTranslation_big}>
                {cardsForRepeat[step].wordTranslation}
              </p>
            )}
          </div>

          <div className={style.img}>
            <img src={`./img/content-images/${cardsForRepeat[step].img}.jpg`} />
          </div>

          <div className={style.textBottom}>
            {isAnswerClicked ? (
              <p>{cardsForRepeat[step].sentence}</p>
            ) : (
              <p>{cardsForRepeat[step].sentenceTranslation}</p>
            )}
          </div>
        </div>
      </div>

      <div className={style.buttons}>
        {isAnswerClicked ? (
          <CardRepeaterButton
            showNextCard={showNextCard}
            cardId={cardsForRepeat[step].id}
          />
        ) : (
          <button className={style.showAnswerBtn} onClick={showAnswer}>
            Показать ответ
          </button>
        )}
      </div>
    </div>
  );
};

const emptyCardRepeater = () => {
  return (
    <div>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.emptyAlert}>
            <p>Поздравляем!</p>
            <p>Вы повторили все карточки на сегодня :D</p>
          </div>
        </div>
      </div>
    </div>
  );
};
