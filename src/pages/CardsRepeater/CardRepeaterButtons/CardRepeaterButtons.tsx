import styles from "./CardRepeaterButtons.module.scss";
import { useAppSelector } from "store";
import { useChangeRepeatTimeMutation } from "store/api/arlezu.api";
import { jwtDecode } from "jwt-decode";

interface CardRepeaterButtonsTypes {
  showNextCard: () => void;
  cardId: number;
}

const CardRepeaterButtons: React.FC<CardRepeaterButtonsTypes> = ({
  showNextCard,
  cardId,
}) => {
  const [createActiveCard, { data, isSuccess }] = useChangeRepeatTimeMutation();
  const token = useAppSelector((state) => state.auth.token) || "";
  const tokenUser = JSON.parse(JSON.stringify(jwtDecode(token)));
  const userId = tokenUser.id;

  const changeRepeatTimeHandler = async (repeatTime: number) => {
    await createActiveCard({ userId, cardId, repeatTime });
  };

  return (
    <div className={styles.buttons}>
      <button
        className={styles.repeatTimeBtn}
        onClick={() => {
          showNextCard();
          changeRepeatTimeHandler(1);
        }}
      >
        еще раз: 1
      </button>
      <button
        className={styles.repeatTimeBtn}
        onClick={() => {
          showNextCard();
          changeRepeatTimeHandler(2);
        }}
      >
        хорошо: 2
      </button>
      <button
        className={styles.repeatTimeBtn}
        onClick={() => {
          showNextCard();
          changeRepeatTimeHandler(4);
        }}
      >
        отлчино: 4
      </button>
    </div>
  );
};

export default CardRepeaterButtons;
