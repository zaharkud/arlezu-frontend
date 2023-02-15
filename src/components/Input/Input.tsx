import style from "./Input.module.scss";

interface InputTypes {
  type: string;
  placeholder: string;
  value?: any;
  refProp?: any;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): any;
  name?: string;
}

const Input: React.FC<InputTypes> = ({
  type,
  placeholder,
  value = "",
  refProp = null,
  onChange,
  name = "",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={style.input}
      value={value}
      ref={refProp}
      onChange={onChange}
      name={name}
    />
  );
};
export { Input };
