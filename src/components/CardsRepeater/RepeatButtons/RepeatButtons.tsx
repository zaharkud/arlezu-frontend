import styles from "./RepeatButtons.module.scss";

interface RepeatButtonsTypes {
  showNextCard: () => void;
}

const RepeatButtons: React.FC<RepeatButtonsTypes> = ({ showNextCard }) => {
  return (
    <div className={styles.buttons}>
      <button className={styles.repeatTimeBtn} onClick={showNextCard}>
        Плохо: 0
      </button>
      <button className={styles.repeatTimeBtn} onClick={showNextCard}>
        Хорошо: 1
      </button>
      <button className={styles.repeatTimeBtn} onClick={showNextCard}>
        Отлично: 3
      </button>
    </div>
  );
};

export { RepeatButtons };
