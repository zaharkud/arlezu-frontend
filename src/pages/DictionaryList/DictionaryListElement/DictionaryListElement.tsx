import styles from "./DictionaryListElement.module.scss";
import { useContext } from "react";

import { GeneralContext } from "context/context";
import { Link } from "react-router-dom";
import { ICard, IContext } from "types/types";
import { DICTIONARY_VIEWER_ROUTE } from "services/consts/route.consts";

interface DictionaryListElementTypes {
  card: ICard;
}

const DictionaryListElement: React.FC<DictionaryListElementTypes> = ({
  card,
}) => {
  const appContext = useContext(GeneralContext) as IContext;

  const startRoute = () => {
    appContext.setStep(card.id - 1);
  };

  return (
    <Link to={DICTIONARY_VIEWER_ROUTE} onClick={startRoute}>
      <div className={styles.card}>
        <div className={styles.img}>
          <img src={`./img/content-images/${card.img}.jpg`} />
        </div>
        <div className={styles.text}>
          <div className={styles.textTop}>
            <p className={styles.word}>{card.word}</p>
          </div>
          <div className={styles.textBottom}>
            <p className={styles.phonetics}>[{card.phonetics}]</p>
            <p className={styles.wordTranslation}>{card.word_translation}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DictionaryListElement;
