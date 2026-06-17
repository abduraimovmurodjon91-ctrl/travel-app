import AdviceCard from "../../ui/adviceCard";
import Title from "../../ui/title";
import adviceImg1 from "../../assets/img/card/card4.png";
import adviceImg2 from "../../assets/img/card/card3.png";
import adviceImg3 from "../../assets/img/card/card6.png";
import { CalendarRange } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

const Advice = () => {
  return (
    <section className="mt-[100px] mb-[100px] container">
      <Title
        title="Travel Tips & Advice"
        subtitle="An enim nullam tempor gravida donec enim  congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna."
        className="w-[327px] lg:w-[762px]"
      />
      <div className="flex justify-between items-center mt-[76px]">
        <Swiper
          loop={true}
          spaceBetween={100}
          slidesPerView={1}
          breakpoints={{
             0: {
              slidesPerView: 1,
            },
            760: {
              slidesPerView: 2,
            },
            1024: { slidesPerView: 2.5 },
          }}
        >
          <SwiperSlide>
            <AdviceCard
              image={adviceImg1}
              icon={<CalendarRange />}
              title="It is almost impossible to read the news without coming across a lead story elections through fake social media accounts..."
              text="Pack wisely before traveling"
              subtitle="25 May, 2021"
            />
          </SwiperSlide>
          <SwiperSlide>
            <AdviceCard
              image={adviceImg2}
              icon={<CalendarRange />}
              title="It is almost impossible to read the news without coming across a lead story elections through fake social media accounts..."
              text="Introducing this amazing city"
              subtitle="25 May, 2021"
            />
          </SwiperSlide>
          <SwiperSlide>
            <AdviceCard
              image={adviceImg3}
              icon={<CalendarRange />}
              title="It is almost impossible to read the news without coming across a lead story elections through fake social media accounts..."
              text="How to travel with paper map"
              subtitle="25 May, 2021"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Advice;
