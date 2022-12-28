import style from "./MainMenuElement.module.scss";
import { Link } from "react-router-dom";

interface MainMenuElementTypes {
  textContent: string;
  imgContent: string;
  link: string;
}

const MainMenuElement: React.FC<MainMenuElementTypes> = ({
  textContent,
  imgContent,
  link,
}) => {
  return (
    <div className={style.itemContainer}>
      <Link to={link} className={style.itemLink}></Link>
      <div className={style.itemText}>
        <p>{textContent}</p>
      </div>
      <div className={style.itemImg}>
        <img src={`./img/deco-images/${imgContent}`} alt="" />
      </div>
    </div>
  );
};

export default MainMenuElement;
