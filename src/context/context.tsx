import { createContext } from "react";
import { IContext } from "../types/types";

export const GeneralContext = createContext<IContext | null>(null);
