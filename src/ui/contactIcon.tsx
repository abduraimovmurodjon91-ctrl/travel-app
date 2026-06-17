interface Props {
    icon:any
}
const ContactIcon = ({icon}: Props) => {
  return (
    <span className="w-[20px] h-[20px] text-[#777E90]">{icon}</span>
  )
}

export default ContactIcon