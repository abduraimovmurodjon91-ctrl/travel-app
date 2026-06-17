import { MapPin } from "lucide-react"

interface Props {
    image: string,
    title: string,
    tours: string
}

const Tour = ({ image, title, tours }: Props) => {
    return (
        <div className="relative hidden lg:flex">
            <div className="w-[272px] h-[280px]">
                <img className="w-full h-full rounded-[50px]" src={image} alt="" />
            </div>
            <div className="bg-[#E6E8EC] left-3 w-[240px] h-[80px] absolute bottom-[16px] rounded-[80px] p-[20px_32px] flex gap-4 items-center">
                <div>
                    <span><MapPin className="text-(--green)" size={35} /></span>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-[#23262F] font-medium text-[16px]">{title}</h1>
                    <p className="text-xs font-normal text-[#777E90]">{tours}</p>
                </div>
            </div>
        </div>
    )
}

export default Tour