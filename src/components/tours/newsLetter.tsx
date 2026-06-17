import { ArrowRight } from "lucide-react"
import Title from "../../ui/title"
import letterimg from "../../assets/img/letter.png"


const NewsLetter = () => {
    return (
        <section className="mt-[150px] container mb-[100px]">
            <div className="flex flex-col gap-8 items-center justify-center lg:justify-between lg:flex-row">
                <div className="flex flex-col gap-4">
                    <Title text="Take A Tour" className="w-[327px] lg:w-[448px]" classLink="text-[32px] lg:text-[48px] w-[382px]" title="Join our newsletter " subtitle="An enim nullam tempor gravida donec enim  congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit." />
                    <form className="flex justify-between p-[14px_16px] mt-[32px] w-[357px] h-12 border-2 border-[#E6E8EC] rounded-[90px]">
                        <input type="email" className="text-[#777E90] text-[14px] font-normal" placeholder="Enter your email" required />
                        <button className="w-[32px] h-[32px] rounded-full bg-(--green) text-(--white) flex items-center justify-center"><ArrowRight /></button>
                    </form>
                </div>
                <div className="lg:w-[600px]  w-[300px]">
                    <img className="w-full bg-center bg-cover" src={letterimg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default NewsLetter