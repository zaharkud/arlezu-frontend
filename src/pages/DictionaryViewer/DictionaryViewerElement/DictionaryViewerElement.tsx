import style from "./DictionaryViewerElement.module.scss";
import { Link } from "react-router-dom";
import { FC, useContext } from "react";

import { ICard, IContext } from "types/types";
import { GeneralContext } from "context/context";
import { MAIN_ROUTE } from "services/consts/route.consts";

interface DictionaryViewerElementTypes {
  changeToPrevStep: () => void;
  changeToNextStep: () => void;
  sentenceTumbler: boolean;
  setSentenceTumbler: (value: boolean) => void;
}

const DictionaryViewerElement: FC<DictionaryViewerElementTypes> = ({
  changeToPrevStep,
  changeToNextStep,
  sentenceTumbler,
  setSentenceTumbler,
}) => {
  const appContext = useContext(GeneralContext) as IContext;

  return (
    <div>
      <div className={style.card}>
        <div
          className={style.changeToPrevCardWrapper}
          onClick={changeToPrevStep}
        ></div>
        <div
          className={style.changeToNextCardWrapper}
          onClick={changeToNextStep}
        ></div>
        <div className={style.textTop}>
          <p className={style.word}>{appContext.cards[appContext.step].word}</p>
          <p className={style.wordTranslation}>
            {appContext.cards[appContext.step].wordTranslation}
          </p>
        </div>
        <div className={style.img}>
          <img
            src={`./img/content-images/${
              appContext.cards[appContext.step].imgSrc
            }`}
          />
        </div>
        <div className={style.textBottom}>
          <p className={style.sentence}>
            {sentenceTumbler
              ? appContext.cards[appContext.step].sentenceTranslation
              : appContext.cards[appContext.step].sentence}
          </p>
        </div>
      </div>

      <div className={style.buttons}>
        <button className={style.favoritesBtn}></button>
        <button className={style.audioBtn}></button>
        <button
          className={style.translationBtn}
          onClick={() => setSentenceTumbler(!sentenceTumbler)}
        ></button>
        <Link className={style.backBtn} to={MAIN_ROUTE}></Link>
      </div>
    </div>
  );
};

export default DictionaryViewerElement;
