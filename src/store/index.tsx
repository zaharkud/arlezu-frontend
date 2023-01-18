import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux/es/exports";
import { arlezuAPI } from "./api/arlezu.api";
import settingsReducer from "./settingsSlice";
import cardsHelperReducer from "./cardsHelperSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    cardsHelper: cardsHelperReducer,
    [arlezuAPI.reducerPath]: arlezuAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(arlezuAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
