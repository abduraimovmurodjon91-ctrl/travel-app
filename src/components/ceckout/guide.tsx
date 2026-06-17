import { Search } from "lucide-react"
import guideImg from "../../assets/img/client/client6.png"
import guideImg2 from "../../assets/img/client/client2.png"
import guideImg3 from "../../assets/img/client/client5.png"
import guideImg4 from "../../assets/img/client/client4.png"
import guideImg5 from "../../assets/img/client/client2.png"
import guideImg6 from "../../assets/img/client/client6.png"
import guideImg7 from "../../assets/img/client/client5.png"
import guideImg8 from "../../assets/img/client/client6.png"
import guideImg9 from "../../assets/img/client/client4.png"
import guideImg10 from "../../assets/img/client/client6.png"
import { Star } from "lucide-react"
import guide from "../../assets/img/guide.png"
import { useState } from "react"

const guides = [
  { id: 1, image: guideImg, name: "Alexander", rate: "4.9" },
  { id: 2, image: guideImg2, name: "Farley", rate: "4.9" },
  { id: 3, image: guideImg3, name: "Frank", rate: "4.9" },
  { id: 4, image: guideImg4, name: "Godfrey", rate: "4.9" },
  { id: 5, image: guideImg5, name: "Harvey", rate: "4.9" },
  { id: 6, image: guideImg6, name: "Issac", rate: "4.9" },
  { id: 7, image: guideImg7, name: "Jasper", rate: "4.9" },
  { id: 8, image: guideImg8, name: "Kane", rate: "4.9" },
  { id: 9, image: guideImg9, name: "Alexander", rate: "4.9" },
  { id: 10, image: guideImg10, name: "Alexander", rate: "4.9" },
]
const Guide = () => {
  const [search, setSearch] = useState<string>("")
  const filteredCard = guides.filter(guide => guide.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <section className="mt-[80px] mb-[100px]">
      <div className="flex flex-col gap-[40px] justify-center items-center lg:flex-row lg:justify-between">
        <h3 className="text-[#777E90] text-[16px] font-medium">There are <span className="text-[#23262F]"> 100+ tour guides </span> to suit your schedule</h3>
        <form className="w-[327px] h-[58px] rounded-[100px] border-2 border-[#E6E8EC] lg:w-[409px] p-[16px_20px] flex items-center gap-2">
          <button className="text-[#777E90] w-5 h-5 "><Search /></button>
          <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search  tour guide" className="text-[#777E90] text-[14px] font-normal" />
        </form>
      </div>
      <div className="mt-[92px] grid grid-cols-1 justify-center items-center gap-6 xl:grid-cols-5">
        {filteredCard.map((card) => (
          <div key={card.id} className="bg-[#F4F5F6] w-[327px] h-[264px] lg:w-[198px] lg:h-[264px] text-center rounded-2xl p-[40px_32px] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[80px]  relative bg-center bg-cover h-[80px]">
                <img className="w-full h-full rounded-[64px]" src={card.image} alt="" />
                <img className="absolute top-[9px] -right-1" src={guide} alt="" />
              </div>
              <div className="mt-4 flex flex-col gap-1 items-center justify-center">
                <h3 className="text-[#23262F] font-medium text-[16px]">{card.name}</h3>
                <p className="text-xs flex gap-2 items-center font-semibold text-[#23262F]"><Star className="w-3 h-3" />{card.rate}</p>
                <button className="border-2 border-[#E6E8EC] mt-4 w-auto flex items-center justify-center h-[40px] rounded-[90px] text-[14px] font-bold text-[14px] p-[12px_26px]">Book now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Guide