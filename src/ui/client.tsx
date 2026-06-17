interface Props {
    image: string,
    title: string,
    subtitle: string
}
const ClientImgCard = ({ image, title, subtitle }: Props) => {
    return (
        <div className="flex gap-4">
            <div className="w-[48px] h-[48px]">
                <img className="w-auto h-full rounded-full bg-center bg-cover" src={image} alt="" />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-[#23262F] w-[125px] font-medium text-[14px]">{title}</h3>
                <span className="text-[#777E90] font-normal text-[14px]">{subtitle}</span>
            </div>
        </div>
    )
}

export default ClientImgCard