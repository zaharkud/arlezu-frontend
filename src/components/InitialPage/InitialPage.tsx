import style from "./InitialPage.module.scss";
import { BoxesMenuItem } from "./BoxesMenuItem/BoxesMenuItem";
import { UserInfo } from "./UserInfo/UserInfo";

const InitialPage = () => {
  return (
    <div className={style.pageContainer}>
      <UserInfo />
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
  );
};

export { InitialPage };
