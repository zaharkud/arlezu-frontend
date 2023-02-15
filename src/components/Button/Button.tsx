import style from "./Button.module.scss";

interface ButtonTypes {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonTypes> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={style.button}>
      {children}
    </button>
  );
};
export { Button };
