import style from "./MainUserInfo.module.scss";

import { Link } from "react-router-dom";
import { PROFILE_ROUTE } from "services/consts/route.consts";

import { useAppSelector } from "store";

const MainUserInfo = () => {
  const settings = useAppSelector((state) => state.settings);

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
        <Link to={PROFILE_ROUTE}>
          <img src={`./img/deco-images/profile/${settings.profileImg}.png`} />
        </Link>
      </div>
    </div>
  );
};

export default MainUserInfo;
