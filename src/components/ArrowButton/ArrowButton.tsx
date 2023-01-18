import style from "./ArrowButton.module.scss";

interface ArrowButtonTypes {
  onClick?: () => void;
  children: React.ReactNode;
}

const ArrowButtonLeft: React.FC<ArrowButtonTypes> = ({ onClick, children }) => {
  return (
    <button className={`${style.button} ${style.buttonLeft}`} onClick={onClick}>
      {children}
    </button>
  );
};

const ArrowButtonRight: React.FC<ArrowButtonTypes> = ({
  onClick,
  children,
}) => {
  return (
    <button
      className={`${style.button} ${style.buttonRight}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { ArrowButtonLeft, ArrowButtonRight };
