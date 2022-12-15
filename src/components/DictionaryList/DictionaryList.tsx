import { DictionaryListItem } from "./DictionaryListItem/DictionaryListItem";
import { ICard } from "../../types/types";
import { HeaderSimple } from "../HeaderSimple/HeaderSimple";

interface DictionaryListTypes {
  cards: ICard[];
  setStep: (value: number) => void;
}

const DictionaryList: React.FC<DictionaryListTypes> = ({ cards, setStep }) => {
  return (
    <div>
      <HeaderSimple />
      {cards.map((card) => (
        <DictionaryListItem key={card.id} card={card} setStep={setStep} />
      ))}
    </div>
  );
};

export { DictionaryList };
