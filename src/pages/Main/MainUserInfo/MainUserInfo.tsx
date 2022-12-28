import style from "./MainUserInfo.module.scss";

const MainUserInfo = () => {
  return (
    <div className={style.userContainer}>
      <div className={style.userStats}>
        <h3 className={style.statsTitle}>
          Твой <span>День</span>
        </h3>
        <div className={style.statsBarContainer}>
          <div className={style.statsBar}></div>
          <p className={style.statsBarText}>
            <span>10</span> карточек
          </p>
        </div>
      </div>
      <div className={style.userImg}>
        <img src="./img/people-images/6.png" />
      </div>
    </div>
  );
};

export default MainUserInfo;
