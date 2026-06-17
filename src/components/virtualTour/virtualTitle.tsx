import Tour from "../../ui/tour"
import TourImg1 from "../../assets/img/tour/tour1.png"
import TourImg2 from "../../assets/img/tour/tour3.png"
import LocationTitle from "../../ui/locationTitle"
import Title from "../../ui/title"
import ToursCard from "../../ui/toursCard"

const VirtualTitle = () => {
    return (
        <section className="container mt-[111px]">
            <div className="flex flex-col gap-[30px] items-center">
                <div className="flex flex-col justify-center lg:justify-between lg:flex-row gap-[80px] lg:gap-[149px] items-center">
                    <Tour image={TourImg1} title="Scandinavia" tours="125 Tours" />
                    <LocationTitle title="Scandinavia" tours="125 Tours" />
                    <ToursCard />
                </div>
                <div >
                    <Title title="Virtual tour"
                        className="w-[327px] lg:w-[482px]"
                        subtitle="Virtual tour is a powerful tool to help you explore and better understand the services our website offers" />
                </div>
                <div className="flex gap-[149px] mt-[72px] hidden lg:flex">
                    <LocationTitle title="Scandinavia" tours="125 Tours" />
                    <Tour image={TourImg2} title="Africa wild" tours="125 Tours" />
                </div>
            </div>
        </section>
    )
}

export default VirtualTitle