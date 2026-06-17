import Button from "../../ui/button"
import paypal from "../../assets/img/paypal.png"
const Paypal = () => {
    return (
        <section>
            <div className="mt-[32px] flex flex-col gap-3">
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
                <div className="mt-[41px]">
                    <img src={paypal} alt="" />
                </div>
                <div className="flex flex-col gap-3 mt-[32px]">
                    <label
                        className="text-xs text-[#777E90] font-normal"
                        htmlFor="date"
                    >
                        email or phone number
                    </label>
                    <input type="email" placeholder="Nganthuy@gmail.com" className="w-[327px] h-12 lg:w-[544px] p-[8px] border-2 border-[#E6E8EC] rounded-[12px]" />
                </div>
                <div className="flex flex-col gap-3 mt-[32px]">
                    <label
                        className="text-xs text-[#777E90] font-normal"
                        htmlFor="date"
                    >
                        Password
                    </label>
                    <input type="password" placeholder="**************" className="w-[327px] h-12 lg:w-[544px] p-[8px] border-2 border-[#E6E8EC] rounded-[12px]" />
                    <Button btnText="Sign in to Paypal" className="text-[#FCFCFD] mt-12 font-bold text-[16px] bg-(--green) w-full lg:w-[200px] h-12 rounded-[90px]" />
                </div>
            </div>
        </section>
    )
}

export default Paypal