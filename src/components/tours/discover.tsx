import { ToursCard } from "../../data/data"
import Title from "../../ui/title"
import { Swiper, SwiperSlide } from "swiper/react"

const Discover = () => {
    return (
        <section className="container mt-[150px]">
            <Title title="Discover more" classLink="w-[327px] lg:w-[544px]" subtitle="An enim nullam tempor sapien gravida donec enim ipsum" />
            <div className="mt-[64px]">
                <Swiper className="w-full" slidesPerView={1} spaceBetween={150} loop={true} breakpoints={{
                    480: {
                        slidesPerView: 1
                    },
                    760: {
                        slidesPerView: 2,
                        spaceBetween: 200
                    },
                    1080: {
                        slidesPerView: 4
                    }
                }}>
                    {ToursCard.map((card) => (
                        <SwiperSlide key={card.id}>
                            <div className="w-[256px]  h-[365px]">
                                <div className="w-full relative group h-[220px]">
                                    <img className="w-full h-full rounded-[16px_16px_0px_0px]" src={card.image} alt="" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button className="bg-[#FCFCFD] opacity-0 hover:opacity-100 duration-300 w-[107px] text-[#23262F] font-bold text-[16px] h-12 rounded-[90px] flex items-center justify-center">{card.btnText}</button>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <h1 className="text-[#141416] text-[16px] font-medium">{card.title}</h1>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <p className="text-[#353945] font-normal text-xs ">{card.city}</p>
                                    <span className="text-[#B1B5C3] flex gap-1 items-center text-xs font-bold">{card.price}<p className="text-(--green)">{card.discount}</p></span>
                                </div>
                                <div className="flex justify-between mt-[33px]">
                                    <span className="text-xs font-normal text-[#777E90]">{card.date}</span>
                                    <p className="text-xs font-semibold font-semibold">{card.rating}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Discover