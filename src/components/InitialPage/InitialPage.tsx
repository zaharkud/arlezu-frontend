import style from "./InitialPage.module.scss";
import { BoxesMenuItem } from "./BoxesMenuItem/BoxesMenuItem";
import { UserInfo } from "./UserInfo/UserInfo";
import { Header } from "../Header/Header";
import { AuthInfo } from "./AuthInfo/AuthInfo";

interface InitialPageTypes {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
}

const InitialPage: React.FC<InitialPageTypes> = ({ isAuth, setIsAuth }) => {
  return (
    <div>
      <Header />
      <div className={style.pageContainer}>
        {isAuth ? <UserInfo /> : <AuthInfo setIsAuth={setIsAuth} />}

        <div className={style.boxesContainer}>
          <BoxesMenuItem
            textContent="Повторить слова"
            imgContent="1.png"
            link="/CardRepeater"
          />
          <BoxesMenuItem
            textContent="Словарь"
            imgContent="12.png"
            link="/CardList"
          />
          <BoxesMenuItem
            textContent="Алфавит"
            imgContent="3.png"
            link="/CardRepeater"
          />
          <BoxesMenuItem
            textContent="Грамматика"
            imgContent="2.png"
            link="/CardRepeater"
          />
        </div>
      </div>
    </div>
  );
};

export { InitialPage };
