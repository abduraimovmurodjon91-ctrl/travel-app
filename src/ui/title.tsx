
interface Props {
    text?:string,
    title:string,
    subtitle?:string,
    className?: string;
    classLink?: string
}

const Title = ({text,title,subtitle,className,classLink}:Props) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold text-[12px] text-(--gray)">{text}</p>
      <h1 className={`font-bold  text-[32px] lg:text-[48px] ${classLink}`}>{title}</h1>
      <span className={`font-medium text-(--gray) ${className}   text-[16px] lg:text-[20px]`}>{subtitle}</span>
    </div>
  );
};

export default Title;
