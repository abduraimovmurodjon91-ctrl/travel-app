import { useState } from "react";
import Button from "../../ui/button";
import ContactIcon from "../../ui/contactIcon";
import Title from "../../ui/title";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagram, FaBehance, FaDribbble } from "react-icons/fa";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    const data = res.json();
    console.log(data);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="container mt-[80px] flex flex-col items-center justify-center text-start lg:text-center ">
      <Title
        title="Get in touch"
        subtitle="Your email address will not be published. Required fields are marked *"
        className="w-[327px] lg:w-[448px]"
      />
      <div className="mt-6 flex flex-col">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center mb-[100px]">
            <div className="flex flex-col gap-3 items-start">
              <label
                htmlFor="name"
                className="text-xs text-[#B1B5C3] font-bold"
              >
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                className="w-[327px] text-[#777E90] font-medium text-[14px] h-12 lg:w-[448px] rounded-[12px] border border-[#E6E8EC] p-[12px_16px]"
                type="text"
                placeholder="Input Name"
                required
              />
            </div>
            <div className="flex flex-col gap-3 items-start mt-6">
              <label
                htmlFor="email"
                className="text-xs text-[#B1B5C3] font-bold"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="w-[327px] h-12 lg:w-[448px] text-[#777E90] font-medium text-[14px] rounded-[12px] border border-[#E6E8EC] p-[12px_16px]"
                type="email"
                placeholder="Input Email"
                required
              />
            </div>
            <div className="mt-6 flex flex-col gap-3 items-start">
              <label
                htmlFor="message"
                className="text-xs text-[#B1B5C3] font-bold"
              >
                message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                id="message"
                placeholder=" Your message"
                className="text-[#B1B5C3] w-[327px] h-[126px] lg:w-[448px] rounded-[12px] p-[12px_16px] border-2 border-[#E6E8EC]  font-medium text-[14px]"
              />
            </div>
            <div className="mt-6 flex  gap-3 items-start">
              <input className="w-[24px] h-[24px]" type="checkbox" />
              <p className="w-[291px] lg:w-[412px]">
                Save my name, email, and website in this browser for the next
                time I comment.
              </p>
            </div>
            <div className="mt-6 flex flex-col justify-center  gap-3 items-center">
              <Button
                type="submit"
                btnText="Send now"
                className="text-(--white) font-bold text-[16px] bg-(--green) w-[200px] h-12 rounded-[90px]"
              />
              <div className="mt-6 flex gap-8 items-center">
                <ContactIcon icon={<CiFacebook size={25} />} />
                <ContactIcon icon={<CiTwitter size={25} />} />
                <ContactIcon icon={<FaInstagram size={25} />} />
                <ContactIcon icon={<FaBehance size={25} />} />
                <ContactIcon icon={<FaDribbble size={25} />} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
