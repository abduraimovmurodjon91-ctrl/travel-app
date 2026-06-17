import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Button from "../../ui/button";
import Title from "../../ui/title";
import { CardData } from "../../data/data";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid, Navigation } from "swiper/modules";

const Discover = () => {
  const [active, setActive] = useState<string>("all");
  const filtered =
    active === "all"
      ? CardData
      : CardData.filter((item) => item.category === active);

  return (
    <section className="mt-[70px] container">
      <div className="text-center">
        <Title
          title="Discover Weekly"
          subtitle="An enim nullam tempor sapien gravida donec enim ipsum"
        />
      </div>
      <div className="mt-[76px] flex  justify-center items-center lg:flex-row lg:justify-between">
        <div className="flex gap-5 overflow-x-auto">
          <Button
            onClick={() => setActive("Domestic")}
            className="bg-(--black) text-(--white) w-[98px] h-[28px] text-xs font-bold "
            btnText="Domestic"
          />
          <Button
            onClick={() => setActive("foreign")}
            className="text-(--gray) shadow-xl text-xs w-[83px] h-[28px]"
            btnText="Foreign"
          />
        </div>
        <div className="flex hidden lg:flex">
          <span className="w-[40px] h-[40px] rounded-full text-(--gray) ">
            <ArrowLeft />
          </span>
          <span className="w-[40px] h-[40px] rounded-full text-(--gray)">
            <ArrowRight />
          </span>
        </div>
      </div>
      <div className="mt-[48px]   items-center   gap-[20px]">
        <Swiper
          modules={[Navigation, Autoplay, Grid]}
          slidesPerView={1}
          loop={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
              grid: { rows: 1 },
            },
            760: {
              slidesPerView: 2,
              grid: { rows: 1 },
            },
            1080: {
              slidesPerView: 3,
              grid: { rows: 2, fill: "row" },
            },
            1440: {
              slidesPerView: 4
            }
          }}
        >
          {filtered.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-[300px] shadow-xl h-[365px]" key={item.id}>
                <div className="w-[300px] h-[220px] ">
                  <img
                    className="w-full h-full rounded-[16px_16px_0_0]"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className=" p-[20px_8px]">
                  <h1 className="font-medium text-[16px] text-[#141416] ">
                    {item.title}
                  </h1>
                  <div className="flex justify-between items-center mt-[6px]">
                    <div className="">
                      <h3>{item.subtitle}</h3>
                    </div>
                    <div className="flex gap-1">
                      <span className="text-[#B1B5C3] font-bold text-xs">
                        ${item.count}
                      </span>
                      <span className="text-xs text-[#4AC63F] font-bold">
                        ${item.discount}
                      </span>
                    </div>
                  </div>
                  <div className="mt-[33px] flex justify-between items-center">
                    <p className="font-normal text-xs text-[#777E90]">
                      {item.date}
                    </p>
                    <span className="font-semibold flex gap-1 items-center text-xs text-[#23262F]">
                      <Star size={12} className="text-(--black)" />
                      {item.rate}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Discover;
