import { Calendar, Copyright, Plane, Star, UserRound } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Plus, Minus, Check } from "lucide-react";
import { useState } from "react";
import Button from "../../ui/button";
import PayCard from "../../ui/payCard";

const Confirm = () => {
    const [count, setCount] = useState<number>(0)
    const [showModal, setShowModal] = useState(false)

    const {
        title,
        image,
        total,
        price,
        discount,
        subtitle,
        rate,
        nights,
        date,
    } = useLocation().state;
    const discountCard = total / 10
    const service = 50
    const overallTotal = total - service - discountCard

    const increase = () => setCount((prev) => prev + 1)
    const decrease = () => setCount((prev) => prev > 1 ? prev - 1 : 1)
    return (
        <section className="mt-[80px]">
            <div className="flex flex-col gap-[96px] justify-center lg:justify-between lg:flex-row">
                <div>
                    <div className="bg-[#F4F5F6] w-[327px] flex flex-col lg:flex-row h-[385px] lg:w-[544px] lg:h-[205px] rounded-[32px] p-[16px] flex gap-6">
                        <div>
                            <img
                                className="w-full lg:w-[192px] h-[164px] rounded-2xl"
                                src={image}
                                alt=""
                            />
                        </div>
                        <div className="mt-3">
                            <h1 className="font-semibold text-[#141416] text-[20px]">
                                {title}
                            </h1>
                            <div className="flex justify-between items-center mt-3">
                                <div>
                                    <h3 className="text-[#353945] font-normal text-xs">
                                        {subtitle}
                                    </h3>
                                </div>
                                <div className="flex gap-1.5 items-center">
                                    <span className="text-[#B1B5C3] font-bold text-[14px] line-through">
                                        ${price}
                                    </span>
                                    <span className="text-[#141416] font-bold text-[14px]">
                                        ${discount}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-[33px] flex flex-col gap-3">
                                <p className="font-normal text-[14px] text-[#777E90]">{date}</p>
                                <span className="text-[14px] flex gap-2 items-center  text-[#23262F] font-semibold">
                                    <Star className="w-4 h-4" fill="black" />
                                    {rate}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-3">
                                <label
                                    className="text-xs text-[#777E90] font-normal"
                                    htmlFor="date"
                                >
                                    Check in
                                </label>
                                <select className="w-[327px] h-12 lg:w-[544px] p-[8px] border-2 border-[#E6E8EC] rounded-[12px]">
                                    <option>May 15, 2024</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-3">
                                <label
                                    className="text-xs text-[#777E90] font-normal"
                                    htmlFor="date"
                                >
                                    Check out
                                </label>
                                <select className="w-[327px] h-12 lg:w-[544px] p-[8px] border-2 border-[#E6E8EC] rounded-[12px]">
                                    <option>May 18, 2024</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-3">
                                <label
                                    className="text-xs text-[#777E90] font-normal"
                                    htmlFor="date"
                                >
                                    Activity
                                </label>
                                <select className="w-[327px] h-12 lg:w-[544px] p-[8px] border-2 border-[#E6E8EC] rounded-[12px]">
                                    <option>Airplane</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-3">
                                <label
                                    className="text-xs text-[#777E90] font-normal"
                                    htmlFor="date"
                                >
                                    Promo code
                                </label>
                                <select className="w-[327px] h-12 lg:w-[544px] p-[8px] border-2 border-[#E6E8EC] rounded-[12px]">
                                    <option>FHN1900034</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-3">
                                <label
                                    className="text-xs text-[#777E90] font-normal"
                                    htmlFor="date"
                                >
                                    Total Night
                                </label>
                                <div className="border-2 border-[#E6E8EC] flex justify-between items-center w-[141px] h-12 p-[8px_12px] rounded-[12px]">
                                    <button onClick={decrease} className="w-[32px] flex items-center justify-center h-[32px] rounded-full border-2 border-[#E6E8EC]"><Minus /></button>
                                    <span className="text-[#23262F] text-[14px] font-medium">{count}</span>
                                    <button onClick={increase} className="w-[32px] h-[32px] flex items-center justify-center rounded-full border-2 border-[#E6E8EC]"><Plus /></button>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-col gap-3">
                                <label
                                    className="text-xs text-[#777E90] font-normal"
                                    htmlFor="date"
                                >
                                    Message the host
                                </label>
                                <textarea placeholder="I will be late about 1 hour, please wait..." className="w-[327px] h-[115px] lg:w-[544px] border-2 border-[#E6E8EC] p-[8px_16px] text-[14px] font-medium text-[#23262F]" ></textarea>
                                <Button onClick={() => setShowModal(true)} btnText="Confirm" className="w-full lg:w-[160px] mt-12 h-12 bg-(--green) text-[16px] text-[#FCFCFD] font-bold" />
                            </div>
                        </div>
                    </div>
                </div>
                {showModal && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-2xl p-[40px] flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                                <Check className="text-green-600 w-8 h-8" />
                            </div>
                            <h2 className="font-bold text-[24px] text-[#23262F]">Booking Confirmed!</h2>
                            <p className="text-[#777E90] text-center">Your booking code</p>
                            <h1 className="font-bold text-[40px] text-[#23262F]">TRV-2024</h1>
                            <button onClick={() => setShowModal(false)} className="bg-(--green) text-white rounded-[90px] px-8 py-3 font-bold">
                                Done
                            </button>
                        </div>
                    </div>
                )}
                <div className="w-[327px] h-[880px] lg:w-[448px] lg:h-[708px] p-[32px_16px] border rounded-3xl border-[#E6E8EC] bg-[#FCFCFD]">
                    <div className="flex items-center gap-3">
                        <h3 className="text-[#B1B5C3] font-bold text-[32px] line-through">${price}</h3>
                        <h3 className="text-[#141416] font-bold text-[32px] flex gap-2 items-center">${discount}<span className="text-[16px] text-[#777E90] font-normal">/person</span></h3>
                    </div>
                    <div className="mt-2 flex gap-2">
                        <span className="text-[14px] flex gap-2 items-center text-[#23262F] font-medium"><Star fill="yellow" className="text-(--yellow)" />{rate}</span>
                        <p className="font-normal text-[14px] text-[#777E90]">(256 reviews)</p>
                    </div>
                    <div className="mt-[32px] bg-[#F4F5F6] w-[295px] h-[312px] lg:w-[384px] lg:h-[160px] p-[16px_16px] rounded-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <PayCard icon={<Calendar />} title="Check-in" subtitle="May 15, 2024" />
                            <PayCard icon={<Calendar />} title="Check-out" subtitle="May 18, 2024" />
                            <PayCard icon={<UserRound />} title="Guests" subtitle="2 guests" />
                            <PayCard icon={<Plane />} title="Activity" subtitle="Airplane" />
                        </div>
                    </div>
                    <div className="mt-[32px]">
                        <h1 className="font-semibold text-[#23262F] text-[24px]"> Price details</h1>
                        <div className="mt-[40px] flex flex-col gap-4">
                            <div className="flex justify-between">
                                <p className="text-[#777E90] text-[14px] font-normal">$102 x {nights} nights</p>
                                <span className="text-[#23262F] text-[14px] font-medium">${total}</span>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-[#777E90] text-[14px] font-normal">10% campaign discount</p>
                                <span className="text-[#23262F] text-[14px] font-medium">-${discountCard}</span>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-[#777E90] text-[14px] font-normal">Service fee</p>
                                <span className="text-[#23262F] text-[14px] font-medium">${service}</span>
                            </div>
                        </div>
                        <div className="mt-[44px] flex justify-between">
                            <p className="text-[#777E90] text-[14px] font-normal">Total</p>
                            <h1 className="font-bold text-[#23262F] text-[40px]">${overallTotal}</h1>
                        </div>
                    </div>
                    <p className="text-xs text-[#777E90] font-normal mt-[32px] flex gap-1.5 items-center justify-center"><Copyright />Free cancellation until 3:00 PM on May 05, 2024</p>
                </div>
            </div>
        </section >
    );
};

export default Confirm;
