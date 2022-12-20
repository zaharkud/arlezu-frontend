import { createContext } from "react";
import { ICard } from "./types/types";

export const CardsContext = createContext<ICard[] | null>(null);
