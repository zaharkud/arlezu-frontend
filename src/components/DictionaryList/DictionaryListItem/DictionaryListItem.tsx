import styles from "./DictionaryListItem.module.scss";
import { Link } from "react-router-dom";
import { ICard } from "../../../types/types";

interface DictionaryListItemTypes {
  card: ICard;
  setStep: (value: number) => void;
}

const DictionaryListItem: React.FC<DictionaryListItemTypes> = ({
  card,
  setStep,
}) => {
  const startRoute = () => {
    setStep(card.id - 1);
  };

  return (
    <Link to="/cardsviewer" onClick={startRoute}>
      <div className={styles.card}>
        <div className={styles.img}>
          <img src={card.imgSrc} />
        </div>
        <div className={styles.text}>
          <div className={styles.textTop}>
            <p className={styles.word}>{card.word}</p>
          </div>
          <div className={styles.textBottom}>
            <p className={styles.phonetics}>[{card.phonetics}]</p>
            <p className={styles.wordTranslation}>{card.wordTranslation}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { DictionaryListItem };
