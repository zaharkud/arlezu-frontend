import style from "./BoxesMenuItem.module.scss";
import { Link } from "react-router-dom";

interface BoxesMenuItemTypes {
  textContent: string;
  imgContent: string;
  link: string;
}

const BoxesMenuItem: React.FC<BoxesMenuItemTypes> = ({
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
        <img src={`./img/people-images/${imgContent}`} alt="" />
      </div>
    </div>
  );
};

export { BoxesMenuItem };
