import style from "./MainPage.module.scss";

import { Header } from "components/index";
import MainMenuElement from "./MainMenuElement/MainMenuElement";
import MainUserInfo from "./MainUserInfo/MainUserInfo";
import MainAuthInfo from "./MainAuthInfo/MainAuthInfo";

import {
  ALPHABET_ROUTE,
  CARDS_REPEATER_ROUTE,
  DICTIONARY_LIST_ROUTE,
  GRAMMAR_ROUTE,
} from "services/consts/route.consts";

import { useAppSelector } from "store/index";

const MainMenuPage = () => {
  const auth = useAppSelector((state) => state.auth);

  return (
    <>
      <div>
        <Header />
        <div className={style.pageContainer}>
          {auth.token ? <MainUserInfo /> : <MainAuthInfo />}

          <div className={style.boxesContainer}>
            <MainMenuElement
              textContent="Повторить слова"
              imgContent="1.png"
              link={CARDS_REPEATER_ROUTE}
            />
            <MainMenuElement
              textContent="Словарь"
              imgContent="12.png"
              link={DICTIONARY_LIST_ROUTE}
            />
            <MainMenuElement
              textContent="Алфавит"
              imgContent="3.png"
              link={ALPHABET_ROUTE}
            />
            <MainMenuElement
              textContent="Грамматика"
              imgContent="2.png"
              link={GRAMMAR_ROUTE}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenuPage;
