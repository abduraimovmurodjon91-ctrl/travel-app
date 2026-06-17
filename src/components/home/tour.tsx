import { Check } from "lucide-react";
import Icon from "../../ui/icon";
import Title from "../../ui/title";
import tourImg from "../../assets/img/Img.png";
import tour from "../../assets/img/tour.png";
import { NavLink, Outlet } from "react-router-dom";

const Tour = () => {
  return (
    <section className="mt-[100px] mb-[100px] container">
      <div className="flex flex-col justify-center items-center gap-[69px] lg:flex-row lg:justify-between">
        <div className="">
          <Title
            title="Discover Our Travel Guideline"
            classLink="w-[327px] lg:w-[448px]"
            subtitle="An enim nullam tempor gravida donec enim  congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna."
            text="Take A Tour"
            className="w-[448px]"
          />

          <div className="mt-[40px] flex flex-col gap-3">
            <Icon
              icon={<Check size={10} />}
              subtitle=" Luctus risusd diam eget"
            />
            <Icon
              icon={<Check size={10} />}
              subtitle="Donec enim  congue magna"
            />
            <Icon
              icon={<Check size={10} />}
              subtitle="Blandit sit amet non magna"
            />
          </div>
          <button className="w-[137px] mt-[40px] h-[48px] rounded-[90px] bg-(--green) text-(--white) text-[16px] font-bold"><NavLink to="/about/support"> Learn More </NavLink></button>
          <Outlet/>
        </div>
        <div className="w-[397px] h-[413px] lg:w-[577px] relative h-[600px]">
          <img src={tourImg} alt="" />
          <img
            className="absolute  bottom-0 w-[516px] h-[429px] lg:w-[751px] h-[522px]"
            src={tour}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Tour;
