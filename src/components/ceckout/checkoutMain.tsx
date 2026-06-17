import Title from "../../ui/title"
import { useState } from "react"
import Confirm from "./confirm"
import Pay from "./pay"
import Guide from "./guide"

const ChechoutMain = () => {
  const [activeStep, setActiveStep] = useState<number>(1)
  return (
    <section className="container mt-[100px]">
      <Title title="Confirm & Pay" classLink="text-[32px] lg:text-[48px]" />
      <div className="flex gap-[32px] mt-[80px] items-center">
        <button onClick={() => setActiveStep(1)} className="flex gap-4 border-b-2 hover:text-[#23262F] items-center pb-[23px] w-[256px] hover:border-[#23262F] rounded-[2px] border-[#B1B5C3] text-[#B1B5C3] group items-center"><span className="w-[44px] hover:text-[#FCFCFD] duration-300 hover:bg-[#23262F] font-medium text-[16px] text-[#FCFCFD] flex items-center justify-center h-[40px] bg-[#B1B5C3] rounded-full">1</span>Confirm</button>
        <button onClick={() => setActiveStep(2)} className="flex gap-4 border-b-2 hover:text-[#23262F] items-center pb-[23px] w-[256px] hover:border-[#23262F] rounded-[2px] border-[#B1B5C3] text-[#B1B5C3] group items-center"><span className="w-[44px] hover:text-[#FCFCFD] duration-300 hover:bg-[#23262F] font-medium text-[16px] text-[#FCFCFD] flex items-center justify-center h-[40px] bg-[#B1B5C3] rounded-full">2</span>Pay</button>
        <button onClick={() => setActiveStep(3)} className="flex gap-4 border-b-2 hover:text-[#23262F] items-center pb-[23px] w-[256px] hover:border-[#23262F] rounded-[2px] border-[#B1B5C3] text-[#B1B5C3] group items-center"><span className="w-[44px] hover:text-[#FCFCFD] duration-300 hover:bg-[#23262F] font-medium text-[16px] text-[#FCFCFD] flex items-center justify-center h-[40px] bg-[#B1B5C3] rounded-full">3</span>Tour guide</button>
      </div>
      {activeStep === 1 && <Confirm />}
      {activeStep === 2 && <Pay />}
      {activeStep === 3 && <Guide />}
    </section>
  )
}

export default ChechoutMain