import style from "./CustomLink.module.scss";
import { Link } from "react-router-dom";

interface CustomLinkTypes {
  to: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkTypes> = ({ to, onClick, children }) => {
  return (
    <Link to={to} className={style.link} onClick={onClick}>
      {children}
    </Link>
  );
};
export { CustomLink };
