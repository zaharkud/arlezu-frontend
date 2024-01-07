import { HeaderSimple } from "components/index";
import LetterElement from "./LetterElement/LetterElement";
import style from "./AlphabetPage.module.scss";

const letters = [
  "Ա ա",
  "Բ բ",
  "Գ գ",
  "Դ դ",
  "Ե ե",
  "Զ զ",
  "Է է",
  "Ը ը",
  "Թ թ",
  "Ժ ժ",
  "Ի ի",
  "Լ լ",
  "Խ խ",
  "Ծ ծ",
  "Կ կ",
  "Հ հ",
  "Ձ ձ",
  "Ղ ղ",
  "Ճ ճ",
  "Մ մ",
  "Յ յ",
  "Ն ն",
  "Շ շ",
  "Ո ո",
  "Չ չ",
  "Պ պ",
  "Ջ ջ",
  "Ռ ռ",
  "Ս ս",
  "Վ վ",
  "Տ տ",
  "Ր ր",
  "Ց ց",
  "ու",
  "Փ փ",
  "Ք ք",
  "Եվ և",
  "Օ օ",
  "Ֆ ֆ",
];

const transcriptions = [
  "а",
  "б",
  "г",
  "д",
  "е",
  "з",
  "э",
  "ы",
  "тh",
  "ж",
  "и",
  "л",
  "х",
  "ц",
  "к",
  "h",
  "дх",
  "гх",
  "ч",
  "м",
  "й",
  "н",
  "ш",
  "во",
  "ч",
  "п",
  "дж",
  "рр",
  "с",
  "в",
  "т",
  "р",
  "ц",
  "у",
  "п",
  "л",
  "ев",
  "о",
  "ф",
];

const AlphabetPage = () => {
  return (
    <div>
      <HeaderSimple page="Алфавит" />
      <div className={style.content}>
        {letters.map((item, index) => (
          <LetterElement
            key={index}
            letterOriginal={item}
            letterTranscription={transcriptions[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default AlphabetPage;
