import DestinationCard from "../../ui/destinationCard";
import Title from "../../ui/title";
import cardImg1 from "../../assets/img/card/card4.png";
import cardImg2 from "../../assets/img/card/card8.png";
import cardImg3 from "../../assets/img/card/card5.png";
import cardImg4 from "../../assets/img/card/card1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const Destination = () => {
  return (
    <section className="mt-[100px] mb-[100pz] container">
      <div className="flex flex-col justify-center items-center text-center lg:text-start lg:items-start">
        <Title
          text="3 steps for the perfect trip"
          title="Popular Destinations"
          subtitle="An enim nullam tempor gravida donec enim  congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna."
          className="w-[311px] lg:w-[738px]"
          classLink="sm:w-[311px]"
        />
      </div>
      <div className="mt-[28px] flex gap-[32px]">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          spaceBetween={250}
          slidesPerView={1.2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            760: {
              slidesPerView: 2,
            },
            1080: {
              slidesPerView: 3
            }
          }}
        >
          <SwiperSlide>
            <DestinationCard
              image={cardImg1}
              text="07 Tours"
              price={540}
              subtitle="From per day"
              className="bg-(--pink)"
              country="Europe"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard
              image={cardImg2}
              text="07 Tours"
              price={540}
              subtitle="From  per day"
              className="bg-(--yellow)"
              country="Africa wild"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard
              image={cardImg3}
              text="07 Tours"
              price={540}
              subtitle="From  per day"
              className="bg-(--green)"
              country="Scandinavia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard
              image={cardImg4}
              text="07 Tours"
              price={540}
              subtitle="From  per day"
              className="bg-(--blue)"
              country="America"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Destination;
