import {
  CalendarRange,
  CarTaxiFront,
  ChevronDown,
  Navigation,
  Search,
  UserRound,
} from "lucide-react";
import SearchFilter from "../../components/searchFilter";

const Filter = () => {
  return (
    <section className="mt-[36px] bg-[url(../src/assets/img/home.jpg)] relative rounded-3xl overflow-hidden  bg-cover bg-center h-[800px]  ">
      <div className="absolute inset-0 bg-black/10 flex flex-col  ">
        <div className=" flex flex-col items-center justify-center mt-[113px]">
          <h1 className="text-(--white) w-[342px] lg:w-[662px] text-center font-bold text-[40px] lg:text-[72px]">
            Discover the most engaging places
          </h1>
          <p className="text-xs mt-[16px] text-(--white) font-normal lg:font-medium lg:text-[16px]">
            Less planning 45,000 trips are ready for you
          </p>
          <button className="bg-(--green) mt-[32px] rounded-[90px] border-6 border-[#FFFFFF80] text-(--white) w-[180px] h-[48px] text-[16px] font-medium lg:font-semibold lg:text-[20px] lg:w-[265px] lg:h-[64px]">
            Start now
          </button>
        </div>
        <div className="flex  items-center justify-center">
          <div className="shadow-xl p-[40px_44px]   lg:justify-between z-50 absolute -bottom-15 bg-(--white) flex flex-col gap-[20px] lg:flex-row items-center w-[327px] h-[504px] lg:w-[1120px] lg:h-[208px] rounded-[24px_24px_0_0]">
            <SearchFilter
              icon={<Navigation />}
              title="Location"
              subtitle="Where are you going?"
            />
            <SearchFilter
              icon={<CarTaxiFront />}
              title="Activity"
              subtitle="Add Activity"
            />
            <SearchFilter
              icon={<CalendarRange />}
              title="Dates"
              subtitle="Add date"
            />
            <SearchFilter
              icon={<UserRound />}
              title="Guest"
              subtitle="Add guests"
            />
            <button className="bg-(--green) flex gap-2 justify-center items-center text-(--white) w-[287px] rounded-[90px] p-[12px_0] lg:rounded-[64px] h-[40px] lg:w-[64px] lg:h-[64px] ">
              <Search className="w-[16px] lg:w-[20px]" />
              <span className="lg:hidden font-bold text-(--white) text-xs">
                Search
              </span>
            </button>
          </div>
          <button className="hidden lg:flex w-[24px] h-[24px] rounded-full text-(--gray)"><ChevronDown/></button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
