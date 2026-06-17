import { Mail, MapPin, Phone } from "lucide-react";
import ContactCard from "../../ui/contactCard";
import Title from "../../ui/title";

const ContactUs = () => {
  return (
    <section className="container mt-[100px] flex flex-col justify-center items-center text-center">
      <Title
        title="Contact Us"
        subtitle="We are at your disposal 7 days a week!"
      />
      <div className="mt-[80px] flex flex-col lg:flex-row  mb-[80px] w-[327px] h-[740px] lg:w-[1120px] lg:h-[291px]">
        <ContactCard
          btnIcon={<MapPin />}
          text="2972 Westheimer Rd. Santa Ana,"
          subtitle="Address"
        />
        <ContactCard
          btnIcon={<Phone />}
          text="(229) 555-0109 (229) 555-2872"
          subtitle="Contact phone"
        />
        <ContactCard
          btnIcon={<Mail />}
          text="Contact@example.com"
          subtitle="Email"
        />
      </div>
    </section>
  );
};

export default ContactUs;
