import style from "./PromoBlock.module.scss";
import { Link } from "react-router-dom";

interface PromoBlockTypes {
  num: string;
  heading: string;
}

const PromoBlock: React.FC<PromoBlockTypes> = ({ num, heading }) => {
  return (
    <div>
      <Link to="/settings">
        <div className={style.container}>
          <div className={style.articleNum}>
            <span>{num}</span>
          </div>
          <div className={style.articleHeading}>{heading}</div>
        </div>
      </Link>
    </div>
  );
};
export { PromoBlock };
