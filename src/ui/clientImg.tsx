interface Props {
  image: string;
}
const ClientImg = ({ image }: Props) => {
  return (
    <div className="w-[100px] h-[100px] lg:w-[131px] h-[131px] ">
      <img className="w-full h-full rounded-full object-cover " src={image} alt="" />
    </div>
  );
};

export default ClientImg;
