import { Star } from "lucide-react"
import guide from "../assets/img/guide.png"

interface Props {
  image:string,
  name:string,
  rate:string
}
const GuideCard = ({image,name,rate}:Props) => {
  return (
    <div className="bg-[#F4F5F6] w-[327px] h-[264px] lg:w-[198px] lg:h-[264px] text-center rounded-2xl p-[40px_32px] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[80px]  relative bg-center bg-cover h-[80px]">
          <img className="w-full h-full rounded-[64px]" src={image} alt="" />
          <img className="absolute top-[9px] -right-1" src={guide} alt="" />
        </div>
        <div className="mt-4 flex flex-col gap-1 items-center justify-center">
          <h3 className="text-[#23262F] font-medium text-[16px]">{name}</h3>
          <p className="text-xs flex gap-2 items-center font-semibold text-[#23262F]"><Star className="w-3 h-3"/>{rate}</p>
          <button className="border-2 border-[#E6E8EC] mt-4 w-auto flex items-center justify-center h-[40px] rounded-[90px] text-[14px] font-bold text-[14px] p-[12px_26px]">Book now</button>
        </div>
      </div>
    </div>
  )
}

export default GuideCard