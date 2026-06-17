interface Props {
  className: string;
  btnText: string;
  onClick?: any,
  type?:any
}
const Button = ({ className, btnText, onClick,type }: Props) => {
  return (
    <button type={type} onClick={onClick} className={`font-bold text-xs rounded-[90px] ${className} `}>{btnText}</button>
  );
};

export default Button;
