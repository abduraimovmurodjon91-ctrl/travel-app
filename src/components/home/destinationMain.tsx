import Button from "../../ui/button"
import Title from "../../ui/title"
import { CardData } from "../../data/data"
import { LineSquiggle } from "lucide-react"
import { useState } from "react"

const DestinationMain = () => {
    const [category, setCategory] = useState<string>("all")
    const Filtered = category === "all" ? CardData : CardData.filter((item) => item.category === category)
    return (
        <section className="container mt-[100px]">
            <div className="flex flex-col items-center justify-center  text-center">
                <Title className="w-[327px] lg:w-[544px]" title="Destination List" classLink="font-bold text-[32px] lg:text-[48px]" subtitle="Stacks is a production-ready library of stackablecontent blocks built in React Native." />
                <div className="mt-12 flex gap-3 items-center">
                    <Button onClick={() => setCategory("Domestic")} btnText="Domestic" className="text-[#777E90] hover:text-[#FCFCFD] p-[6px_16px] duration-300 text-[14px] font-bold hover:bg-[#23262F] rounded-[100px] w-auto h-[28px]" />
                    <Button onClick={() => setCategory("foreign")} btnText="Foreign" className="text-[#777E90] text-[14px] font-bold p-[6px_16px] hover:text-[#FCFCFD] duration-300 hover:bg-[#23262F] rounded-[100px] w-auto h-[28px]" />
                </div>
            </div>
            <div className="mt-[100px]  grid grdi-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {Filtered.map((card) => (
                    <div key={card.id} className="w-[327px]  h-[400px] hover:scale-105 duration-300 rounded-2xl">
                        <div className="relative w-[327px] h-[400px]">
                            <img className="w-full h-full rounded-2xl" src={card.image} alt="" />
                            <div className="p-[0px_0px_40px_40px] flex gap-5 absolute inset-0 bg-black/10">
                                <span className="w-[113px] bg-[#14141633] h-[40px] absolute flex items-center justify-center  bottom-30 rounded-[40px] border border-[#FCFCFD] text-[#F4F5F6] text-[14px] font-medium">{card.tours}{" Tours"}</span>
                                <h1 className="text-[#FCFCFD] absolute bottom-15 text-[32px] font-bold">{card.region}</h1>
                                <p className="text-[#FCFCFD] flex gap-3 absolute bottom-8 text-[14px] font-normal"><LineSquiggle />{card.distance}{" km"}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </section>
    )
}

export default DestinationMain