import Title from "../../ui/title";
import clientImg1 from "../../assets/img/client/cleint1.png";
import clientImg2 from "../../assets/img/client/client2.png";
import clientImg3 from "../../assets/img/client/client7.png";
import clientImg4 from "../../assets/img/client/client4.png";
import clientImg5 from "../../assets/img/client/client5.png";
import clientImg6 from "../../assets/img/client/client6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Button from "../../ui/button";
import ClientImgCard from "../../ui/client";

const Client = () => {
  return (
    <section className="mt-[100px] mb-[100px] bg-[#F4F5F6]">
      <div className="container  flex flex-col gap-3 lg:flex-row items-center justify-center relative lg:justify-between">
        <div className="flex flex-col mt-[100px]">
          <Title title="What our happy  clients say" text="Testimonials" classLink="w-[327px] lg:w-[382px]" />
          <Button btnText="Contact Us" className="text-[#23262F] font-bold text-[16px] border-2 border-[#E6E8EC] w-[136px] h-12 mt-[52px]" />
          <div className="mt-[80px] hidden lg:block  mb-[126px]">
            <Swiper modules={[Autoplay, Navigation]}
              style={{ width: "100%" }}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 3000 }}
              slidesPerView={4}
            >
              <SwiperSlide className="!w-auto">
                <ClientImgCard title="Isabelle O'Conner" subtitle="BA at Robin" image={clientImg1} />
              </SwiperSlide>
              <SwiperSlide className="!w-auto">
                <ClientImgCard title="Mara Hilpert" subtitle="Web Designer" image={clientImg2} />
              </SwiperSlide>
              <SwiperSlide className="!w-auto">
                <ClientImgCard title="Mara Hilpert" subtitle="Web Designer" image={clientImg3} />
              </SwiperSlide>
              <SwiperSlide className="!w-auto">
                <ClientImgCard title="Mara Hilpert" subtitle="Web Designer" image={clientImg4} />
              </SwiperSlide>
              <SwiperSlide className="!w-auto">
                <ClientImgCard title="Mara Hilpert" subtitle="Web Designer" image={clientImg5} />
              </SwiperSlide>
              <SwiperSlide className="!w-auto">
                <ClientImgCard title="Mara Hilpert" subtitle="Web Designer" image={clientImg6} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="w-full lg:mt-0 lg:absolute lg:right-0 lg:top-20 h-auto bg-[#ffffff] p-[40px_16px] lg:p-[64px_64px] lg:w-[544px] lg:h-[316px] rounded-2xl border border-[#FCFCFD]">
          <ClientImgCard title="Isabelle O'Conner" subtitle="BA at Robin" image={clientImg1} />
          <p className="text-[#777E90] font-normal mt-10 text-[14px] w-[295px] lg:w-[416px]">An enim nullam tempor gravida donec enim  congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna.</p>
        </div>
      </div>
    </section>
  );
}

export default Client;
