import styles from "./CardRepeaterButtons.module.scss";

interface CardRepeaterButtonsTypes {
  showNextCard: () => void;
}

const CardRepeaterButtons: React.FC<CardRepeaterButtonsTypes> = ({
  showNextCard,
}) => {
  return (
    <div className={styles.buttons}>
      <button className={styles.repeatTimeBtn} onClick={showNextCard}>
        еще раз: 0
      </button>
      <button className={styles.repeatTimeBtn} onClick={showNextCard}>
        хорошо: 1
      </button>
      <button className={styles.repeatTimeBtn} onClick={showNextCard}>
        отлчино: 3
      </button>
    </div>
  );
};

export default CardRepeaterButtons;
