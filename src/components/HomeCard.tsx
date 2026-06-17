interface Props {
  image: string;
  text: string;
  subtitle: string;
  className: string;
}
const HomeCard = ({ image, text, subtitle, className }: Props) => {
  return (
    <div className="w-[343px]  p-[64px_32px] h-[376px] hover:scale-105 duration-300 rounded-[20px] bg-(--white)">
      <div className="flex flex-col gap-5">
        <div
          className={`${className} flex items-center justify-center w-[96px] h-[96px] rounded-[30px]`}
        >
          <img className="w-[48px] h-[48px]" src={image} alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-[#23262F] text-[20px]">{text}</h3>
          <p className="text-(--gray) text-[16px] font-normal w-[293px]">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
