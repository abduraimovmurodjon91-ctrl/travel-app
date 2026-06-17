import { Earth, MapPin, Star, UserRound } from "lucide-react";
import UserCard from "../../ui/userCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
const User = () => {
  return (
    <section className="mt-[100px] mb-[100px]  bg-[#F4F5F6]">
      <div className="flex items-center justify-center container">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={200}
          loop={true}
          slidesPerView={1.2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            480: {
              slidesPerView: 1
            },
            760: {
              slidesPerView: 3,
            },
            1080: {
              slidesPerView: 4
            }


          }}
          className="grid grid-cols-4"
        >
          <SwiperSlide>
            <UserCard
              icon={<UserRound />}
              text="28k"
              subtitle="Total Users"
              className="bg-(--light-blue)"
            />
          </SwiperSlide>
          <SwiperSlide>
            <UserCard
              icon={<MapPin />}
              text="12k"
              subtitle="Total Tours"
              className="bg-(--light-orange)"
            />
          </SwiperSlide>
          <SwiperSlide>
            <UserCard
              icon={<Earth />}
              text="64k"
              subtitle="Social Likes"
              className="bg-(--light-pink)"
            />
          </SwiperSlide>
          <SwiperSlide>
            <UserCard
              icon={<Star />}
              text="14k"
              subtitle="5 Star Ratings"
              className="bg-(--light-green)"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default User;
