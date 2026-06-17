interface Props {
  btnIcon: any;
  subtitle: string;
  text: string;
}
const ContactCard = ({ btnIcon, subtitle, text }: Props) => {
  return (
    <div className="bg-[#FCFCFD] rounded-2xl flex flex-col justify-center items-center  p-[80px_90px]  border border-[#E6E8EC] ">
      <button className="w-[56px] h-[56px] rounded-full bg-(--green) text-(--white) flex items-center justify-center">
        {btnIcon}
      </button>
      <p className="mt-4 text-[#777E90] font-normal text-[14px]">{subtitle}</p>
      <span className="mt-3 text-[#23262F] font-normal text-[14px]">
        {text}
      </span>
    </div>
  );
};

export default ContactCard;
