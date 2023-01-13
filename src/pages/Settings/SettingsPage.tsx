import style from "./Settings.module.scss";
import { Button, Header } from "components/index";

import {
  changeIsAuth,
  changeProfileImg,
  changeRepeatCardsRange,
  changeNewCardsRange,
} from "store/settingsSlice";
import { useAppDispatch, useAppSelector } from "store";

const SettingsPage = () => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settings);

  return (
    <div>
      <Header />
      <div className={style.container}>
        <section className={style.img}>
          <h2>Изображение профиля:</h2>
          <div className={style.profileImg}>
            <div className={style.currentImg}>
              <img
                src={`./img/deco-images/profile/${settings.profileImg}.png`}
              />
            </div>
            <div className={style.optionalImages}>
              <a
                className={style.optionalImg}
                onClick={() => dispatch(changeProfileImg(1))}
              >
                <img src="./img/deco-images/profile/1.png" />
              </a>

              <a
                className={style.optionalImg}
                onClick={() => dispatch(changeProfileImg(2))}
              >
                <img src="./img/deco-images/profile/2.png" />
              </a>

              <a
                className={style.optionalImg}
                onClick={() => dispatch(changeProfileImg(3))}
              >
                <img src="./img/deco-images/profile/3.png" />
              </a>

              <a
                className={style.optionalImg}
                onClick={() => dispatch(changeProfileImg(4))}
              >
                <img src="./img/deco-images/profile/4.png" />
              </a>
            </div>
          </div>
        </section>

        <section className={style.repeatCardsRange}>
          <div className={style.rangeText}>
            <h2>Повторять слов:</h2>
            <span>{settings.repeatCardsRange}</span>
          </div>
          <input
            className={style.range}
            onChange={(e) => dispatch(changeRepeatCardsRange(+e.target.value))}
            type="range"
            min="50"
            max="300"
            defaultValue="50"
          />
        </section>

        <section className={style.newCardsRange}>
          <div className={style.rangeText}>
            <h2>Новых слов:</h2>
            <span>{settings.newCardsRange}</span>
          </div>
          <input
            className={style.range}
            onChange={(e) => dispatch(changeNewCardsRange(+e.target.value))}
            type="range"
            min="1"
            max="30"
            defaultValue="10"
          />
        </section>

        <Button onClick={() => dispatch(changeIsAuth(false))}>
          Выйти из аккаунта
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;
