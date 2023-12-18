import { useEffect, useState } from "react";

import { HeaderSimple } from "components/index";
import DictionaryViewerElement from "./DictionaryViewerElement/DictionaryViewerElement";

import { useAppDispatch, useAppSelector } from "store";
import { useGetAllCardsQuery } from "store/api/arlezu.api";
import { changeStep } from "store/cardsHelperSlice";

import { useCreateActiveCardMutation } from "store/api/arlezu.api";
import { jwtDecode } from "jwt-decode";

const DictionaryViewerPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const [createActiveCard, { data, isSuccess }] = useCreateActiveCardMutation();
  const token = useAppSelector((state) => state.auth.token) || "";
  const tokenUser = JSON.parse(JSON.stringify(jwtDecode(token)));
  const userId = tokenUser.id;

  //Получаем переменную "cardStep", в которой хранится номер-идентификатор текущей карточки
  const step = useAppSelector((state) => state.cardsHelper.cardStep);

  //Получаем карточки со словами
  const { data: cards = [] } = useGetAllCardsQuery();

  //Состояние для возврата предложения со словом в начальное положение (язык) после смены карточки
  const [sentenceTumbler, setSentenceTumbler] = useState<boolean>(false);

  const createActiveCardHandler = async () => {
    await createActiveCard({ userId, cardId: cards[step].id });
  };

  //Показываем предыдущую карточку, когда доходим до 1-й карточки, начинаем круг заново
  const changeToPrevStep = () => {
    step <= cards.length - 1 && step > 0
      ? dispatch(changeStep(step - 1))
      : dispatch(changeStep(cards.length - 1));
  };

  //Показываем следующую карточку, когда доходим до последней карточки, начинаем круг заново
  const changeToNextStep = () => {
    createActiveCardHandler();
    step < cards.length - 1
      ? dispatch(changeStep(step + 1))
      : dispatch(changeStep(0));
  };

  //Переводим предложение со словом в начальное положение (язык) после смены карточки
  useEffect(() => {
    setSentenceTumbler(false);
  }, [step]);

  return (
    <div>
      <HeaderSimple page={"Словарь"} />
      <DictionaryViewerElement
        changeToPrevStep={changeToPrevStep}
        changeToNextStep={changeToNextStep}
        sentenceTumbler={sentenceTumbler}
        setSentenceTumbler={setSentenceTumbler}
        cards={cards}
        step={step}
      />
    </div>
  );
};

export default DictionaryViewerPage;
