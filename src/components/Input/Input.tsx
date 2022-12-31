import style from "./Input.module.scss";

interface InputTypes {
  type: string;
  placeholder: string;
}

const Input: React.FC<InputTypes> = ({ type, placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} className={style.input} />
  );
};
export { Input };
