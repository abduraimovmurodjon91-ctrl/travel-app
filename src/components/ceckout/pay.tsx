import { useLocation } from "react-router-dom"
import Button from "../../ui/button"
import PayCard from "../../ui/payCard"
import { Calendar, UserRound, Plane, Copyright } from "lucide-react"
import { useState } from "react"
import Paypal from "./paypal"
import Card from "./card"
import { Navigate } from "react-router-dom"

const Pay = () => {
  const location = useLocation();
  const state = location.state;

  if (!location.state) {
    return <Navigate to="/tours" replace />;
  }

  if (!state) {
    return <h1>No booking data found</h1>;
  }


  const { title,
    image,
    total,
    price,
    discount,
    subtitle,
    nights,
  } = useLocation().state

  const discountCard = total / 10
  const service = 50
  const overallTotal = total - service - discountCard
  const [btn, setBtn] = useState<string>("Paypal")


  return (
    <section className="mt-[128px]">
      <div className="flex flex-col gap-[80px] justify-center lg:justify-between lg:flex-row">
        <div>
          <div className="flex gap-[233px]">
            <h3 className="font-semibold text-[24px] text-[#23262F]">Pay with</h3>
            <div className="flex gap-[18px]">
              <Button onClick={() => setBtn("Paypal")} btnText="Paypal" className="text-[14px] font-bold text-[#777E90] w-auto h-[28px] duration-300 hover:bg-[#23262F] p-[6px_16px] hover:text-[#FCFCFD]" />
              <Button onClick={() => setBtn("CreditCard")} btnText="Credit Card" className="text-[14px] font-bold text-[#777E90] w-auto h-[28px] duration-300 hover:bg-[#23262F] p-[6px_16px] hover:text-[#FCFCFD]" />
            </div>
          </div>
          <div className="mt-[32px] flex flex-col gap-3">
            {btn === "Paypal" && <Paypal />}
            {btn === "CreditCard" && <Card />}
          </div>
        </div>
        <div className="w-[327px] h-[1104px] lg:h-[992px] lg:w-[448px] border border-[#E6E8EC] p-[32px]">
          <img src={image} className="w-[295px] h-[212px] lg:w-[384px] lg:h-[256px] rounded-2xl" alt="" />
          <div className="mt-[32px]">
            <div>
              <h1 className="font-bold text-[24px] text-[#23262F]">{title}</h1>
            </div>
            <div className="flex justify-between mt-3">
              <h3>{subtitle}</h3>
              <div className="flex gap-2">
                <span className="text-[#B1B5C3] text-[16px] font-bold">${price}</span>
                <span className="ext-[16px] font-bold text-[#141416]">${discount}</span>
              </div>
            </div>
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
    </section>
  )
}

export default Pay