import { HeaderSimple } from "components/index";
import { useGetAllCardsQuery } from "store/api/arlezu.api";

import DictionaryListElement from "./DictionaryListElement/DictionaryListElement";
import { ICard } from "types/types";

const DictionaryListPage: React.FC = () => {
  const { data } = useGetAllCardsQuery();

  return (
    <div>
      <HeaderSimple page={"Словарь"} />
      {data.map((card: ICard) => (
        <DictionaryListElement key={card.id} card={card} />
      ))}
    </div>
  );
};

export default DictionaryListPage;
