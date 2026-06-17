import { MapPin } from "lucide-react"
import ToursImg from "../assets/img/tour/tour2.jpg"
const ToursCard = () => {
    return (
        <div className="relative">
            <div className="w-[299px] h-[391px]">
                <img className="w-full h-full rounded-[50px]" src={ToursImg} alt="" />
            </div>
            <div className="bg-[#FCFCFD] absolute top-[20px] left-[20px] w-[259px] h-[351px] rounded-[40px] p-[29px_37px] flex flex-col gap-4 items-center">
                <div className="flex gap-4">
                    <div>
                        <span><MapPin className="text-(--green)" size={35} /></span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-[#23262F] font-medium text-[16px]">Virgin Islands</h1>
                        <p className="text-xs font-normal text-[#777E90]">125 Tours</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <p className="text-[#777E90] font-normal text-[14px]">Best time</p>
                    <h3 className="text-[#23262F] font-medium text-[14px]">Fall</h3>
                </div>
                <div className="flex gap-2 items-center">
                    <p className="text-[#777E90] font-normal text-[14px]">Activities</p>
                    <h3 className="text-[#23262F] font-medium text-[14px]">Camp - Sailing -
                        Ride a horse</h3>
                </div>
                <div className="mt-4">
                    <p className="text-[#777E90] font-normal text-[14px]">Reference site about. Ipsum, giving information on its origins.</p>
                </div>
            </div>
        </div>
    )
}

export default ToursCard