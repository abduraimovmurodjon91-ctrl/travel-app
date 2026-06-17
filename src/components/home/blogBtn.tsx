interface Props {
  btnText: string;
  onClick?: () => void
}
const BlogBtn = ({ btnText,onClick }: Props) => {
  const classBtn = ({ isActive }: { isActive: boolean }) => {
    return `text-[#777E90] text-[14px] p-[6px_16px] flex items-center justify-center font-bold hover:text-(--white) hover:bg-[#23262F] duration-300 rounded-[100px] w-auto h-[28px] ${isActive ? "text-(--white) bg-[#23262F]" : ""}`;
  };
  return <button onClick={onClick} className={classBtn({isActive: false})}>{btnText}</button>;
};

export default BlogBtn;
