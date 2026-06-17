import Button from "../../ui/button";
import Title from "../../ui/title";
import HomeCard from "../HomeCard";
import homeImg from "../../assets/img/homeCard/light.png";
import homeImg2 from "../../assets/img/homeCard/Filled.png";
import homeImg3 from "../../assets/img/homeCard/Filled.svg";

const Find = () => {
  return (
    <section className="mt-[200px] container bg-[#FCFCFD] mb-[100px]">
      <div className="flex flex-col justify-center gap-8 text-center items-center">
        <Title
          text="3 steps for the perfect trip"
          subtitle="An enim nullam tempor gravida donec enim  congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna."
          title="Find Travel Perfection"
          className="w-[327px] xl:w-[890px]"
        />
        <Button
          btnText="Book now"
          className="bg-(--green) text-(--white) w-[124px] h-[48px] rounded-[90px]"
        />
      </div>
      <div className="mt-[93px] flex flex-col justify-center items-center gap-6 lg:flex-row lg:justify-between">
        <HomeCard
          image={homeImg}
          text="Tell us what you want to do"
          className="bg-(--blue)"
          subtitle="Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam."
        />
        <HomeCard
          image={homeImg2}
          text="Share your travel preference"
          className="bg-(--yellow)"
          subtitle="Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam."
        />
        <HomeCard
          image={homeImg3}
          className="bg-(--pink)"
          text="We’ll give you recommendations"
          subtitle="Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam."
        />
      </div>
    </section>
  );
};

export default Find;
