import type { ReactNode } from "react"

interface Props {
    icon: ReactNode,
    text:string
}
const Amenities = ({icon,text}: Props) => {
    return (
        <div className="flex gap-4 items-center">
            <span className="w-6 h-6 text-[#777E90]">{icon}</span>
            <p className="text-[#777E90] text-[16px] font-semibold">{text}</p>
        </div>
    )
}

export default Amenities