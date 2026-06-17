import { useState } from "react"
import { ToursCard } from "../../data/data"
import Button from "../../ui/button"
import Title from "../../ui/title"
import { Swiper, SwiperSlide } from "swiper/react"

const VirtualCard = () => {
    const [category, setCategory] = useState<string>("all")
    const Filtered = category === "all" ? ToursCard : ToursCard.filter((card) => card.category === category)
    return (
        <section className="mt-[100px] container ">
            <Title title="Virtual tour library" className="w-[327px] lg:w-[396px]" subtitle="Track your workouts, get better results, and be the best version of you. Less thinking" text="the perfect trip" />
            <div className="mt-[38px] flex gap-6 items-center">
                <Button onClick={() => setCategory("all")} btnText="All" className="text-[#777E90] duration-300 text-[14px] font-bold hover:bg-[#23262F] hover:text-[#FCFCFD] h-[28px] w-auto p-[6px_16px]" />
                <Button onClick={() => setCategory("sea")} btnText="Sea" className="text-[#777E90] text-[14px] duration-300 font-bold hover:bg-[#23262F] hover:text-[#FCFCFD] h-[28px] w-auto p-[6px_16px]" />
                <Button onClick={() => setCategory("mountains")} btnText="Mountains" className="text-[#777E90] text-[14px] font-bold duration-300 hover:bg-[#23262F] hover:text-[#FCFCFD] h-[28px] w-auto p-[6px_16px]" />
                <Button onClick={() => setCategory("city")} btnText="City" className="text-[#777E90] text-[14px] font-bold hover:bg-[#23262F] duration-300 hover:text-[#FCFCFD] h-[28px] w-auto p-[6px_16px]" />
            </div>
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
                    {Filtered.map((card) => (
                        <SwiperSlide key={card.id}>
                            <div className="w-[256px] h-[365px]">
                                <div className="w-full h-[220px]">
                                    <img className="w-full h-full rounded-[16px_16px_0px_0px]" src={card.image} alt="" />
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

export default VirtualCard