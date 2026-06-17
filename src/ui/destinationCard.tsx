interface Props {
  price: number;
  className: string;
  text: string;
  image: string;
  subtitle: string;
  country: string;
}
const DestinationCard = ({
  price,
  className,
  text,
  image,
  subtitle,
  country,
}: Props) => {
  return (
    <div className="w-[337px]  h-[337px]">
      <div className="w-[326p] relative h-[226px] ">
        <img className="w-full h-full rounded-3xl" src={image} alt="" />
        <span
          className={`${className} absolute top-5 left-5 flex items-center justify-center text-xs text-[#FCFCFD] font-bold w-[81px] h-[26px] rounded-4xl`}
        >
          {text}
        </span>
      </div>
      <div>
        <h1 className="text-2xl text-[#23262F] font-semibold">{country}</h1>
        <span className="mt-2 flex gap-2 text-[#777E90] text-xs font-normal ">
          {subtitle}
          <p className="text-xs text-[#23262F] font-bold">{price}</p>
        </span>
      </div>
    </div>
  );
};

export default DestinationCard;
