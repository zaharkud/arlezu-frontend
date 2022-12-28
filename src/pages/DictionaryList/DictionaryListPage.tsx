import { useContext } from "react";

import { ICard, IContext } from "types/types";
import { HeaderSimple } from "components/index";
import { GeneralContext } from "context/context";

import DictionaryListElement from "./DictionaryListElement/DictionaryListElement";

const DictionaryListPage: React.FC = () => {
  const appContext = useContext(GeneralContext) as IContext;

  return (
    <div>
      <HeaderSimple />
      {appContext.cards.map((card) => (
        <DictionaryListElement
          key={card.id}
          card={card}
          setStep={appContext.setStep}
        />
      ))}
    </div>
  );
};

export default DictionaryListPage;
