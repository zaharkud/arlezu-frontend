import style from "./LetterElement.module.scss";

interface LetterElementTypes {
  letterOriginal: string;
  letterTranscription: string;
}

const LetterElement: React.FC<LetterElementTypes> = ({
  letterOriginal,
  letterTranscription,
}) => {
  return (
    <div className={style.container}>
      <div className={style.contentTop}>{letterOriginal}</div>
      <div className={style.contentBottom}>[ {letterTranscription} ]</div>
    </div>
  );
};

export default LetterElement;
