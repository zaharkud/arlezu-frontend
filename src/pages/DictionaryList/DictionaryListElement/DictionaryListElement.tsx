import styles from "./DictionaryListElement.module.scss";

import { Link } from "react-router-dom";
import { DICTIONARY_VIEWER_ROUTE } from "services/consts/route.consts";

import { ICard } from "types/types";

import { useAppDispatch } from "store";
import { changeStep } from "store/cardsHelperSlice";

interface DictionaryListElementTypes {
  card: ICard;
}

const DictionaryListElement: React.FC<DictionaryListElementTypes> = ({
  card,
}) => {
  const dispatch = useAppDispatch();
  console.log("card " + card);

  //по нажатию на элемент передаем перемнную "step" - id нажатой карточки, в хранилище, откуда ее возьмент компонент "DictionaryViewer"
  const startRoute = () => {
    dispatch(changeStep(card.id - 1));
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
