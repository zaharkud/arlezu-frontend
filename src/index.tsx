import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
//import { CardContext, cardsArray } from "./context";
import { cardsContent } from "./cards-base";
import { ICard } from "./types/types";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  //<CardContext.Provider value={cardsArray}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  //</CardContext.Provider>
);
