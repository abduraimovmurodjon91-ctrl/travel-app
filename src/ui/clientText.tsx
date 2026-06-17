interface Props {
    text: string
}
const ClientText = ({text}:Props) => {
  return (
    <h1 className="text-[#777E90] flex items-center justify-center text-[14px] font-normal w-[343px] lg:w-[509px] lg:text-[16px]">
        {text}
    </h1>
  )
}

export default ClientText