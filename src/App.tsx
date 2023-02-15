import "assets/style/App.scss";

import { useGetAllCardsQuery } from "store/api/arlezu.api";

import AppRouter from "services/routing/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { useAppDispatch } from "store";
import { useEffect } from "react";
import { setUser } from "store/authSlice";

const App = () => {
  //! решить проблему - почему без этой строки не получаем карточки
  const { isLoading, isError, data } = useGetAllCardsQuery();

  const dispatch = useAppDispatch();

  //получем почту и пароль пользователя из локального хранилища, чтобы не прерывать сессию после обноваления страницы
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  //передаем почту и паоль в ханилище
  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <div className="wrapper">
          <AppRouter />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
