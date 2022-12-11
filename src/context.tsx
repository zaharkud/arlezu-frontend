import React from "react";
import { useState } from "react";
import { ICard } from "./types/types";
import { cardsContent } from "./cards-base";
import { rejects } from "assert";

const ContextFunc = () => {
  const [cardsArray, setCardsArray] = useState<ICard[]>(cardsContent);
  const CardContext = React.createContext<ICard[]>(cardsArray);
};

//export { CardContext, cardsArray };
