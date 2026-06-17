import { MapPin } from "lucide-react"

interface Props {
    title: string,
    tours: string
}
const LocationTitle = ({ tours, title }: Props) => {
    return (
        <div className="bg-[#E6E8EC]  w-[240px] h-[80px]  rounded-[80px] p-[20px_32px] flex gap-4 items-center">
            <div>
                <span><MapPin className="text-(--green)" size={35} /></span>
            </div>
            <div className="flex flex-col gap-1">
                <h1 className="text-[#23262F] font-medium text-[16px]">{title}</h1>
                <p className="text-xs font-normal text-[#777E90]">{tours}</p>
            </div>
        </div>
    )
}

export default LocationTitle