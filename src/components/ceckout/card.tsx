import Button from "../../ui/button"
import Visa from "../../assets/img/Visa_Inc 1.png"
import card from "../../assets/img/Group.png"
const Card = () => {
    return (
        <section className="mt-[32px]">
            <div className="flex flex-col gap-3">
                <label
                    className="text-xs text-[#777E90] font-normal"
                    htmlFor="date"
                >
                    saved contact info
                </label>
                <select className="w-[327px] h-12 lg:w-[544px] p-[8px] border-2 border-[#E6E8EC] rounded-[12px]">
                    <option>Nganthuy</option>
                </select>
            </div>
            <div className="mt-12">
                <h3 className="font-semibold text-[#23262F] text-[24px]">Login to Paypal</h3>
                <div className="mt-[41px] flex gap-[65px] items-center">
                    <img className="w-auto" src={Visa} alt="" />
                    <img className="w-auto" src={card} alt="" />
                </div>
                <div className="flex flex-col gap-3 mt-[32px]">
                    <label
                        className="text-xs text-[#777E90] font-normal"
                        htmlFor="date"
                    >
                        card number
                    </label>
                    <input type="number" placeholder="3456 3476 1234 7684" className="w-[327px] h-12 lg:w-[544px] p-[8px] border-2 border-[#E6E8EC] rounded-[12px]" />
                </div>
                <div className="flex flex-col gap-3 mt-[32px]">
                    <label
                        className="text-xs text-[#777E90] font-normal"
                        htmlFor="date"
                    >
                        card holder
                    </label>
                    <input type="password" placeholder="Ngan Thuy" className="w-[327px] h-12 lg:w-[544px] p-[8px] border-2 border-[#E6E8EC] rounded-[12px]" />
                </div>
                <div className="flex gap-[32px] items-center mt-[32px]">
                    <div className="flex flex-col gap-3">
                        <label className="text-xs text-[#777E90] font-normal">EXPIRATION DATE</label>
                        <input className="lg:w-[256px] w-[147px] h-12 p-[8px] border-2 border-[#E6E8EC] rounded-[12px]" type="date" placeholder="MM / YY" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="text-xs text-[#777E90] font-normal" >CVC</label>
                        <input className=" lg:w-[256px] w-[147px] h-12 p-[8px] border-2 border-[#E6E8EC] rounded-[12px]" type="text" placeholder="Ngan Thuy" />
                    </div>
                </div>
                <Button btnText="Sign in to Visa" className="text-[#FCFCFD] mt-12 font-bold text-[16px] bg-(--green) w-full lg:w-[200px] h-12 rounded-[90px]" />
            </div>
        </section>
    )
}

export default Card