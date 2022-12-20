import style from "./DictionaryViewerItem.module.scss";
import { Link } from "react-router-dom";
import { FC } from "react";
import { ICard } from "../../../types/types";
import { useContext } from "react";
import { CardsContext } from "../../../context";

interface DictionaryViewerItemProps {
  changeToPrevStep: () => void;
  changeToNextStep: () => void;
  step: number;
  sentenceTumbler: boolean;
  setSentenceTumbler: (value: boolean) => void;
}

const DictionaryViewerItem: FC<DictionaryViewerItemProps> = ({
  changeToPrevStep,
  changeToNextStep,
  step,
  sentenceTumbler,
  setSentenceTumbler,
}) => {
  const cards = useContext(CardsContext) as ICard[];

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
          <p className={style.wordTranslation}>{cards[step].wordTranslation}</p>
        </div>
        <div className={style.img}>
          <img src={cards[step].imgSrc} />
        </div>
        <div className={style.textBottom}>
          <p className={style.sentence}>
            {sentenceTumbler
              ? cards[step].sentenceTranslation
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
        <Link className={style.backBtn} to="/"></Link>
      </div>
    </div>
  );
};

export { DictionaryViewerItem };
