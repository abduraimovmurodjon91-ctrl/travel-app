interface Props {
    icon:any,
    title:string,
    subtitle:string
}

const SearchFilter = ({ icon, title, subtitle }:Props) => {
  return (
    <div className="flex gap-3 flex-col lg:flex-row justify-center items-center">
      <div>
        <span className="text-(--gray)">{icon}</span>
      </div>
      <div>
        <h3 className="font-semibold text-center lg:text-start text-[20px] text-(--black)">{title}</h3>
        <span className="font-normal text-[16px] text-(--gray)">{subtitle}</span>
      </div>
    </div>
  );
};

export default SearchFilter;
