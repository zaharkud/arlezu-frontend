import React from "react";
import styles from "../CardListItem.module.scss";
import { Link } from "react-router-dom";
import { FC } from "react";
import { ICard } from "../../../../types/types";

interface ItemProps {
  changeToPrevStep: () => void;
  changeToNextStep: () => void;
  cards: ICard[];
  step: number;
  sentenceTumbler: boolean;
  setSentenceTumbler: (value: boolean) => void;
}

const CardListItemContent: FC<ItemProps> = ({
  changeToPrevStep,
  changeToNextStep,
  cards,
  step,
  sentenceTumbler,
  setSentenceTumbler,
}) => {
  return (
    <div>
      <div className={styles.card}>
        <div
          className={styles.changeToPrevCardWrapper}
          onClick={changeToPrevStep}
        ></div>
        <div
          className={styles.changeToNextCardWrapper}
          onClick={changeToNextStep}
        ></div>
        <div className={styles.textTop}>
          <p className={styles.word}>{cards[step].word}</p>
          <p className={styles.wordTranslation}>
            {cards[step].wordTranslation}
          </p>
        </div>
        <div className={styles.img}>
          <img src={cards[step].imgSrc} />
        </div>
        <div className={styles.textBottom}>
          <p className={styles.sentence}>
            {sentenceTumbler
              ? cards[step].sentenceTranslation
              : cards[step].sentence}
          </p>
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.favoritesBtn}></button>
        <button className={styles.audioBtn}></button>
        <button
          className={styles.translationBtn}
          onClick={() => setSentenceTumbler(!sentenceTumbler)}
        ></button>
        <Link className={styles.backBtn} to="/"></Link>
      </div>
    </div>
  );
};

export { CardListItemContent };
