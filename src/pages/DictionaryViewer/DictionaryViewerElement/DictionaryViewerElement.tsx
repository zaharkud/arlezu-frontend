import style from "./DictionaryViewerElement.module.scss";
import { Link } from "react-router-dom";
import { FC, useContext } from "react";

import { ICard, IContext } from "types/types";
import { GeneralContext } from "context/context";

interface DictionaryViewerElementTypes {
  changeToPrevStep: () => void;
  changeToNextStep: () => void;
  step: number;
  sentenceTumbler: boolean;
  setSentenceTumbler: (value: boolean) => void;
}

const DictionaryViewerElement: FC<DictionaryViewerElementTypes> = ({
  changeToPrevStep,
  changeToNextStep,
  step,
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
          <p className={style.word}>{appContext.cards[step].word}</p>
          <p className={style.wordTranslation}>
            {appContext.cards[step].wordTranslation}
          </p>
        </div>
        <div className={style.img}>
          <img src={appContext.cards[step].imgSrc} />
        </div>
        <div className={style.textBottom}>
          <p className={style.sentence}>
            {sentenceTumbler
              ? appContext.cards[step].sentenceTranslation
              : appContext.cards[step].sentence}
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
        <Link className={style.backBtn} to="/"></Link>
      </div>
    </div>
  );
};

export default DictionaryViewerElement;
