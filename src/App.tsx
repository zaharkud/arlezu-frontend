import "assets/style/App.scss";

import { useGetAllCardsQuery } from "store/api/arlezu.api";

import AppRouter from "services/routing/AppRouter";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const { isLoading, isError, data } = useGetAllCardsQuery();

  return (
    <BrowserRouter>
      <div className="app">
        <div className="wrapper">
          {/* {isError && <h1>ERROR FETCHING CARDS</h1>} */}
          <AppRouter />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
