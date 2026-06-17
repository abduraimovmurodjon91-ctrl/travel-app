import type { ReactNode } from "react"

interface Props {
    icon: ReactNode,
    title: string,
    subtitle: string
}
const PayCard = ({ icon, title, subtitle }:Props) => {
    return (
        <div className="flex items-center gap-3">
            <div>
                <span className="w-8 h-8 text-[#B1B5C3]">{icon}</span>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-xs text-[#777E90] font-normal">{title}</p>
                <h3 className="text-[16px] text-[#23262F] font-medium">{subtitle}</h3>
            </div>
        </div>
    )
}

export default PayCard