import Button from "../../ui/button"
import { CardData } from "../../data/data"
import { Heart, Star } from "lucide-react"
import { useNavigate } from "react-router-dom"

const ToursFilter = () => {
  const navigate = useNavigate()
  return (
    <section className="container mt-[200px]">
        <div>
          <div className="flex flex-col gap-6 items-center justify-center lg:flex-row lg:justify-between">
            <div className="flex items-center gap-1.5">
              <Button btnText="Cheapest" className="w-auto p-[8px-16px] h-[28px] text-[14px] font-bold hover:bg-[#23262F] hover:text-[#FCFCFD]" />
              <Button btnText="Best" className="w-auto p-[6px_16px] h-[28px] text-[14px] font-bold hover:bg-[#23262F] hover:text-[#FCFCFD]" />
              <Button btnText="Quickest" className="w-auto h-[28px] p-[6px_16px] text-[14px] font-bold hover:bg-[#23262F] hover:text-[#FCFCFD]" />
            </div>
            <div>
              <select className="border border-[#E6E8EC] rounded-[12px] font-medium text-[14px] text-[#23262F] w-[256px] h-12 rounded-[12px] p-[12px_16px] o">
                <option>Time of day</option>
              </select>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 justify-center items-center gap-[32px]">
            {CardData.map((card) => (
              <div key={card.id} className="w-[256px] h-[365px]">
                <div className="relative w-[256px] h-[220px] group">
                  <img className="w-full h-full rounded-[16px_16px_0px_0px]" src={card.image} alt="" />
                  <span className="w-[32px] absolute right-5 top-3 h-[32px] flex items-center justify-center rounded-[32px] bg-[#FCFCFD] text-[#FD7FE9]"><Heart fill="pink" /></span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={() => navigate(`/tours/${card.id}`)} className="bg-[#FCFCFD] rounded-[90px] w-[131px] h-[48px] text-[#23262F] font-bold text-[16px] shadow-lg">{card.btnText}</button>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-[16px] font-medium text-[#141416]">{card.title}</h3>
                </div>
                <div className="mt-2 flex justify-between">
                  <div>
                    <p>{card.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-[#B1B5C3] font-bold">{card.count}</span>
                    <span className="text-xs font-bold text-[#4AC63F]">{card.discount}</span>
                  </div>
                </div>
                <div className="flex justify-between mt-[33px]">
                  <span className="text-[14px] font-normal ">{card.date}</span>
                  <p className="text-xs font-semibold flex gap-1 items-center text-[#23262F]"><Star size={15} />{card.rate}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
    </section>
  )
}

export default ToursFilter