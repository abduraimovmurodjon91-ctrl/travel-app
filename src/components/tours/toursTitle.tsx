import SearchFilter from "../../components/searchFilter";
import {
    CalendarRange,
    CarTaxiFront,
    ChevronDown,
    Navigation,
    Search,
    UserRound,
} from "lucide-react";
const ToursTitle = () => {
    return (
        <>
            <section className="bg-[url(../src/assets/img/toursBg.jpg)] mt-8 mb-[100px] bg-center bg-cover relative rounded-2xl w-full h-[277px] mt-8 lg:w-full lg:h-[380px]">
                <div className="absolute inset-0 bg-black/30">
                    <h1 className="text-[#FCFCFD] flex items-center justify-center absolute inset-0  font-bold text-[40px] lg:text-[72px]">Tour List</h1>
                </div>
            </section>
            <div className="flex relative -mt-[170px] px-4 z-10 items-center justify-center">
                <div className="shadow-xl  p-[40px_44px]  lg:justify-between  bg-(--white) flex flex-col gap-[20px] lg:flex-row items-center w-[327px] h-auto lg:w-[1120px] lg:h-[208px] rounded-[24px_24px_0_0]">
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
                <button className="hidden lg:flex w-[24px] h-[24px] rounded-full text-(--gray)"><ChevronDown /></button>
            </div>
        </>
    )
}

export default ToursTitle