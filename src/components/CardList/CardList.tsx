import { CardPromo } from "./CardPromo/CardPromo";
import { ICard } from "../../types/types";

interface CardListTypes {
  cards: ICard[];
  setStep: (value: number) => void;
}

const CardList: React.FC<CardListTypes> = ({ cards, setStep }) => {
  return (
    <div>
      {cards.map((card) => (
        <CardPromo key={card.id} card={card} setStep={setStep} />
      ))}
    </div>
  );
};

export { CardList };
