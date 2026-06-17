interface Props {
    icon : any,
    subtitle: string
}
const Icon = ({icon,subtitle}:Props) => {
  return (
    <div className="flex gap-3 items-center">
        <div className="w-[20px] bg-(--green) flex items-center justify-center h-[20px] rounded-full text-(--white)">{icon}</div>
        <p>{subtitle}</p>
    </div>
  )
}

export default Icon