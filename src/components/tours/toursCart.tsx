import { useNavigate, useParams } from "react-router-dom"
import { CardData, plans, } from "../../data/data"
import { BriefcaseMedical, Building2, Calendar, CreditCard, Flag, Handbag, LaptopMinimalCheck, Minus, Plus, Star, User, Utensils, Wifi } from "lucide-react"
import Button from "../../ui/button"
import Amenities from "../../ui/amenities"
import { useState } from "react"

const ToursDetails = () => {
    const [guest, setGuest] = useState<number>(2)
    const [nights, setNight] = useState<number>(2)
    const [price] = useState<number>(548)
    const [date, setDate] = useState<string>("")
    const { id } = useParams()
    const [open, setOpen] = useState<number | null>(2)

    const tour = CardData.find((item) => item.id === Number(id))
    if (!tour) return <h1>not found</h1>

    const increase = () => setNight((prev) => prev + 1)
    const decrease = () => setNight((prev) => (prev > 1 ? prev - 1 : 1))

    const total = price * guest * nights

    const navigate = useNavigate()

    const handleCheckout = () => {
        navigate("/checkout", {
            state: {
                title: tour.title,
                image: tour.image,
                rate: tour.rate,
                subtitle: tour.subtitle,
                price: tour.count,
                discount: tour.discount,
                date: tour.date,
                guest,
                total,
                nights
            }
        })

    }

    return (
        <div className="container mt-[40px]">
            <div>
                <h1 className="font-bold text-[32px] text-[#23262F] lg:text-[48px]">{tour.title}</h1>
                <div className="flex gap-8 items-center mb-[40px]">
                    <p className="flex items-center gap-2 text-[18px] font-semibold"><Star fill="black" />{tour.rate}</p>
                    <span className="flex font-normal text-[18px] text-[#777E90] gap-2"><Flag />{tour.subtitle}</span>
                </div>
            </div>
            <div className="w-[278px] h-[256px] lg:w-[618px] lg:h-[520px]">
                <img className="w-full h-full rounded-2xl " src={tour.image} alt="" />
            </div>
            <div className="mt-[80px]">
                <div className="flex flex-col gap-10 justify-center mt-[80px] lg:flex-row lg:justify-between">
                    <div className="flex flex-col gap-6">
                        <div className="flex  flex-col gap-6">
                            <h3 className="text-[#23262F] text-[20px] font-semibold">Overview</h3>
                            <p className="w-[327px] lg:w-[640px]">The secret journey of Tonkin is designed for travelers who want to touch, taste and feel the souls of Northern Vietnam through their unique highlights and experiences. More than simple whirlwind tours, the secret journey of Tonkin of Tonkin marry iconic destinations and must-see spots with the hidden corners and below-the-skin experiences to discover some of the famous and unique places around the Halong region.</p>
                            <Button className="w-[108px] h-[40px]  p-[12px_16px] border-2 text-[#23262F] text-xs font-bold border-[#E6E8EC] flex items-center justify-center" btnText="Show more" />
                        </div>
                        <div className="mt-[80px]">
                            <h3 className="text-[20px] font-semibold text-[#23262F]">Amenities</h3>
                            <div className="grid grid-cols-3 gap-5 items-center mt-6">
                                <Amenities icon={<BriefcaseMedical />} text="Near the hospital" />
                                <Amenities icon={<LaptopMinimalCheck />} text="Free computer" />
                                <Amenities icon={<Utensils />} text="Breakfast included" />
                                <Amenities icon={<Wifi />} text="Free wifi 24/7" />
                                <Amenities icon={<Building2 />} text="Nearby city" />
                                <Amenities icon={<CreditCard />} text="ATM" />
                            </div>
                            <div className="mt-[80px]">
                                <h3 className="text-[20px] font-semibold text-[#23262F]">Tours Plan</h3>
                                <div>
                                    {plans.map((item) => (
                                        <div key={item.day} className="border-b py-4">

                                            <div
                                                className="flex items-center justify-between cursor-pointer"
                                                onClick={() =>
                                                    setOpen(open === item.day ? null : item.day)
                                                }
                                            >
                                                <div className="flex items-center gap-4">
                                                    <span
                                                        className={`px-4 py-2 rounded-full ${open === item.day
                                                            ? "bg-black text-white"
                                                            : "bg-gray-200"
                                                            }`}
                                                    >
                                                        Day {item.day}
                                                    </span>

                                                    <h3 className="font-semibold">{item.title}</h3>
                                                </div>

                                                <span>{open === item.day ? "▲" : "▼"}</span>
                                            </div>

                                            {open === item.day && (
                                                <p className="mt-4 text-gray-500">
                                                    {item.desc}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-[80px]">
                            <h3 className="text-[20px] font-semibold text-[#23262F]">Tours Map</h3>
                            <div className="w-[327px] mt-8 lg:w-[640px] h-[240px] rounded-[24px] overflow-hidden">
                                <iframe src="https://maps.google.com/maps?q=London&z=13&output=embed" width="100%" height="100%" style={{ border: "none" }} loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-[327px] h-[784px] lg:w-[448px] border border-[#E6E8EC] bg-[#FCFCFD]">
                            <div className="p-[32px]">
                                <div className="flex items-center gap-3">
                                    <h1 className="font-bold text-[32px] text-[#B1B5C3]">${tour.count}</h1>
                                    <h1 className="text-[#141416] font-bold text-[32px]">${tour.discount}</h1>
                                    <p className="text-[16px] text-[#777E90] font-normal">/person</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span className="text-[#23262F] flex gap-2 text-[16px] font-medium "><Star className="text-(--yellow)" fill="yellow" />{tour.rate}</span>
                                    <p className="font-normal text-[16px] text-[#777E90]">(256 reviews)</p>
                                </div>
                                <div className="bg-[#F4F5F6] p-[16px] flex gap-8 flex-col lg:flex-row mt-10">
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <span className="w-[32px] h-[32px] text-[#B1B5C3]"><Calendar /></span>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-xs text-[#777E90] font-normal" htmlFor="date">Date</label>
                                            <input value={date} onChange={(e) => setDate(e.target.value)} className="text-[16px] font-medium text-[#23262F]" type="date" placeholder="May 15, 2024" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <span className="w-[32px] h-[32px] text-[#B1B5C3]">{<User />}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-xs text-[#777E90] font-normal" htmlFor="date">Guests</label>
                                            <input value={guest} onChange={(e) => setGuest(Number(e.target.value))} className="text-[16px] font-medium text-[#23262F]" type="text" placeholder="2 guests" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6 mt-[32px] mb-4">
                                    <div className="flex flex-col gap-3">
                                        <label className="text-[#B1B5C3] font-bold text-xs" htmlFor="check">Check in</label>
                                        <select className="w-auto h-12 border-2 border-[#F4F5F6] p-[12px_16px]" id="check">
                                            <option>May 15, 2024</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label className="text-[#B1B5C3] font-bold text-xs" htmlFor="check">Check out</label>
                                        <select className="w-auto h-12 border-2 border-[#F4F5F6] p-[12px_16px]" id="check">
                                            <option>May 18, 2024</option>
                                        </select>
                                    </div><div className="flex flex-col gap-3">
                                        <label className="text-[#B1B5C3] font-bold text-xs" htmlFor="check">Activity</label>
                                        <select className="w-auto h-12 border-2 border-[#F4F5F6] p-[12px_16px]" id="check">
                                            <option>Airplane</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label className="text-[#B1B5C3] font-bold text-xs">Total Night</label>
                                        <div className="border-2 border-[#E6E8EC] flex justify-between items-center w-[141px] h-12 p-[8px_12px] rounded-[12px]">
                                            <button onClick={decrease} className="w-[32px] flex items-center justify-center h-[32px] rounded-full border-2 border-[#E6E8EC]"><Minus /></button>
                                            <span className="text-[#23262F] text-[14px] font-medium">{nights}</span>
                                            <button onClick={increase} className="w-[32px] h-[32px] flex items-center justify-center rounded-full border-2 border-[#E6E8EC]"><Plus /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h1 className="text-[#23262F] font-bold text-[32px]">${total}</h1>
                                            <p className="text-[#777E90] fontnormal text-xs">Total for two peoples</p>
                                        </div>
                                        <div>
                                            <button onClick={handleCheckout} className="bg-(--green) w-[155px] h-12 rounded-[90px] flex gap-3 p-[12px_20px] text-[#FCFCFD] text-[16px] font-bold">Book now <Handbag /> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ToursDetails