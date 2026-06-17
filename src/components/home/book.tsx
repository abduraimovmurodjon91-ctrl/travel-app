import { useState } from "react";
import Button from "../../ui/button";
import Title from "../../ui/title";
import video from "../../assets/img/video.png";
import { Play } from "lucide-react";

const Book = () => {
  const [isPlaying, setIsplaying] = useState<boolean>(false);
  return (
    <section className="mt-[100px] mb-[100px] container">
      <div className="lg:flex lg:justify-between items-center">
        <Title
          text="fleet travel ui kit"
          title="Book a ticket& just leave"
          classLink="w-[320px]"
        />
        <Button
          btnText="Book now"
          className="w-[123px] h-12 rounded-[90px] bg-(--green) text-(--white) font-bold text-[16px] "
        />
      </div>
      <div className="relative w-full h-[482px] lg:h-[702px] mt-[78px]  overflow-hidden cursor-pointer">
        {!isPlaying && (
          <>
            <img
              src={video}
              className="w-full h-full object-cover rounded-[16px]"
              alt=""
            />
            <div
              onClick={() => setIsplaying(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-[60px] h-[60px] bg-(--white) rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Play size={20} className="text-(--black) mb-1" fill="black" />
              </div>
            </div>
          </>
        )}
        {isPlaying && (
          <video
            muted
            src="mp.4"
            autoPlay
            controls
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </section>
  );
};

export default Book;
