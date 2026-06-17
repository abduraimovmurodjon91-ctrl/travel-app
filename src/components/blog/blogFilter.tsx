import { CalendarRange, Search, UserRound } from "lucide-react";
import BlogBtn from "../home/blogBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { FilterCard } from "../../data/data";
import { useState } from "react";

const BlogFilter = () => {
  const [category, setCategory] = useState<string>("all");
  const [query, setQuery] = useState<string>("")

  const Filtered =
    category === "all"
      ? FilterCard
      : FilterCard.filter((item) => item.category === category);

  
      FilterCard.filter((item) => (
    
        item.title.toLocaleLowerCase().includes(query.toLowerCase())
  ))
  return (
    <section className="container mt-[80px] mb-[116px]">
      <div className="flex flex-col justify-center items-center gap-[40px] lg:flex-row lg:justify-between">
        <div className="flex gap-3 items-center w-[50%]">
          <Swiper
            loop={false}
            slidesPerView={4}
            spaceBetween={16}
            breakpoints={{
              480: {
                slidesPerView: 3,
              },
              760: {
                slidesPerView: 4,
              },
              1080: {
                slidesPerView: 6,
              },
            }}
          >
            <SwiperSlide>
              <BlogBtn btnText="All" onClick={() => setCategory("all")} />
            </SwiperSlide>
            <SwiperSlide>
              <BlogBtn
                btnText="Tips and Tricks"
                onClick={() => setCategory("Tips and Tricks")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogBtn
                btnText="Exploring"
                onClick={() => setCategory("Exploring")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogBtn
                btnText="Off Topic"
                onClick={() => setCategory("Off Topic")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogBtn btnText="Travel" onClick={() => setCategory("Travel")} />
            </SwiperSlide>
            <SwiperSlide>
              <BlogBtn btnText="How To" onClick={() => setCategory("How to")} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <form className="w-[409px] h-[56px] border-2 border-[#E6E8EC] p-[16px_20px] flex items-center gap-2 rounded-[100px]">
            <button className="text-[#B1B5C3] w-[24px] h-[24px]">
              <Search />
            </button>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="text-[#B1B5C3] font-normal text-[14px]"
              type="text"
              placeholder="Search everything"
            />
          </form>
        </div>
      </div>
      <div className="mt-[80px] grid grid-cols-1 justify-center items-center lg:grid-cols-2 xl:grid-cols-3">
        {Filtered.map((card) => (
          <div key={card.id} className="w-[352px] h-[466px] ">
            <div className="relative w-[352px] h-[297px] ">
              <img
                className="w-full h-full rounded-2xl"
                src={card.image}
                alt=""
              />
              <h3 className="bg-[#23262F] text-[#FCFCFD] w-auto p-[6px_16px] flex items-center justify-center h-[28px] rounded-[100px] font-bold text-[14px] absolute top-5 left-5">
                {card.category}
              </h3>
            </div>
            <div className="flex mt-[20px] gap-3 ">
              <div className="w-[40px] h-[40px]">
                <img
                  className="w-full h-full rounded-[48px] bg-cover bg-center"
                  src={card.profileImg}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#23262F] font-semibold text-[16px]">
                  {card.title}
                </h3>
                <p className="font-normal text-[14px] text-[#777E90]">
                  {card.subtitle}
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-[25px]">
              <span className="text-[14px] font-normal text-[#777E90] flex gap-2 items-center">
                <CalendarRange />
                {card.data}
              </span>
              <p className="text-[14px] font-normal text-[#777E90] flex gap-2 items-center">
                <UserRound />
                {card.user}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogFilter;
