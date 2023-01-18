import style from "./DictionaryViewerElement.module.scss";
import { FC } from "react";

import { ICard } from "types/types";

interface DictionaryViewerElementTypes {
  changeToPrevStep: () => void;
  changeToNextStep: () => void;
  sentenceTumbler: boolean;
  setSentenceTumbler: (value: boolean) => void;
  cards: ICard[];
  step: number;
}

const DictionaryViewerElement: FC<DictionaryViewerElementTypes> = ({
  changeToPrevStep,
  changeToNextStep,
  sentenceTumbler,
  setSentenceTumbler,
  cards,
  step,
}) => {
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
          <p className={style.word}>{cards[step].word}</p>
          <p className={style.wordTranslation}>
            {cards[step].word_translation}
          </p>
        </div>
        <div className={style.img}>
          <img src={`./img/content-images/${cards[step].img}.jpg`} />
        </div>
        <div className={style.textBottom}>
          <p className={style.sentence}>
            {sentenceTumbler
              ? cards[step].sentence_translation
              : cards[step].sentence}
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
        <button className={style.nextBtn} onClick={changeToNextStep}></button>
      </div>
    </div>
  );
};

export default DictionaryViewerElement;
