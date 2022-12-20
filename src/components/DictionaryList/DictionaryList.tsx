import { DictionaryListItem } from "./DictionaryListItem/DictionaryListItem";
import { ICard } from "../../types/types";
import { HeaderSimple } from "../UI/HeaderSimple/HeaderSimple";
import { useContext } from "react";
import { CardsContext } from "../../context";

interface DictionaryListTypes {
  setStep: (value: number) => void;
}

const DictionaryList: React.FC<DictionaryListTypes> = ({ setStep }) => {
  const cards = useContext(CardsContext) as ICard[];

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
