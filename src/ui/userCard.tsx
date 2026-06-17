interface Props {
  icon: any;
  text: string;
  subtitle: string;
  className: string;
}
const UserCard = ({ icon, text, subtitle, className }: Props) => {
  return (
    <div className="bg-[#FCFCFD] mt-[100px] mb-[100px] w-[256px] h-[248px] rounded-[24px] p-[32px_55px]">
      <div className="flex flex-col gap-5 justify-center items-center">
        <span className="w-[16px] h-[16px]">{icon}</span>
        <h1
          className={`${className}  text-[40px] font-bold rounded-[40px] text-[#23262F] w-[148px] h-[80px] flex items-center justify-center`}
        >
          {text}
        </h1>
        <span className="text-[#23262F] font-medium text-[16px]">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
