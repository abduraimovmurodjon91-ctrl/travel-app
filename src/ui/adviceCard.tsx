import { Heart } from "lucide-react";
import { useState } from "react";

interface Props {
  image: string;
  text: string;
  title: string;
  icon: any;
  subtitle: string;
}

const AdviceCard = ({ image, text, title, icon, subtitle }: Props) => {
  const [liked, setLiked] = useState<boolean>(false);
  return (
    <div className="w-[352px] h-[456px]">
      <div className="w-[352px] relative h-[320px] group ">
        <img className="w-full h-full rounded-2xl" src={image} alt="" />
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-[40px] h-[40px] bg-(--white) rounded-full flex items-center justify-center shadow-md "
        >
          <Heart
            size={18}
            className={liked ? "text-pink-500" : "text-gray-500"}
            style={{ fill: liked ? "#ec4899" : "none" }}
          />
        </button>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-[#FCFCFD] rounded-[90px] w-[131px] h-[48px] text-[#23262F] font-bold text-[16px] shadow-lg">
            Read More
          </button>
        </div>
      </div>
      <div className="mt-[24px]">
        <h3 className="font-semibold text-[16px] text-[#23262F]">{text}</h3>
        <p className="text-[#777E90] font-normal mt-2 text-xs w-[352px]">
          {title}
        </p>
        <p className="flex items-center gap-2 mt-4 text-[#777E90] text-xs font-medium">
          {icon} <span>{subtitle}</span>
        </p>
      </div>
    </div>
  );
};

export default AdviceCard;
