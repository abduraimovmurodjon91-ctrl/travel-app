import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { ArrowRight, Earth, Menu, X } from "lucide-react";
import { Suspense, useState } from "react";
import Loading from "../pages/loading";
import ErrorBoundary from "../error/errorBoundary";

const links = [
  { to: "/", label: "home" },
  { to: "/tours", label: "Tours" },
  { to: "/destination", label: "destination" },
  { to: "/virtualtour", label: "virtualtour" },
  { to: "/blog", label: "blog" },
  { to: "/about", label: "about" },
  { to: "/contact", label: "contact" },
];
const footerLink1 = [
  {
    label: "Discover",
  },
  {
    label: "Find Travel",
  },
  {
    label: "Popular Destinations",
  },
  {
    label: "Reviews",
  },
];
const footerLink2 = [
  {
    label: "Customer Support",
  },
  {
    label: "Privacy & Policy",
  },
  {
    label: "Contact Channels",
  },
];
const classLink = ({ isActive }: { isActive: boolean }) => {
  return `font-bold capitalize text-xs text-(--gray) ${isActive ? "text-(--green)" : ""}`;
};

const MainLayout = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <header className="container relative mt-[36px]">
        <div className="flex items-center justify-between">
          <button className="lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          <div>
            <img src={logo} alt="" />
          </div>
          <nav className="hidden xl:flex">
            <ul className="flex items-center gap-[32px]">
              {links.map((link) => (
                <NavLink key={link.to} className={classLink} to={link.to}>
                  {link.label}
                </NavLink>
              ))}
              <button className="text-(--gray) flex items-center gap-2 ">
                <Earth />
                English
              </button>
            </ul>
          </nav>
          {open && (
            <div className="absolute z-50 right-0 left-0 top-0 mt-15 px-3 py-4 rounded-b-2xl w-[100%] bg-(--white) shadow-xl border-t-2 border-(--gray)">
              <div onClick={() => setOpen(false)} className="flex flex-col justify-center items-center gap-3">
                {links.map((link) => (
                  <NavLink key={link.to} className={classLink} to={link.to}>
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
          <div className="flex items-center gap-4">
            <NavLink className="font-bold text-xs flex items-center justify-center  w-[83px] h-[40px] bg-(--green) text-(--white) rounded-[90px] " to="/signup">Sign up</NavLink>
            <NavLink className="font-bold text-xs  w-[83px] h-[40px] shadow-xl flex items-center justify-center text-(--black) rounded-[90px] " to="/signIn">Sign In</NavLink>
          </div>
        </div>
      </header>
      <ErrorBoundary>
        <main className="">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </main>
      </ErrorBoundary>
      <footer className="container mt-[80px]">
        <div className="grid grid-cols-3 gap-[47px] relative justify-center lg:grid-cols-4">
          <div className="flex flex-col gap-2 w-auto h-[32px] lg:w-[160px] lg:h-[32px]">
            <img className="w-full h-full " src={logo} alt="" />
            <p className="hidden lg:flex w-[256px] text-[14px] text-[#777E90] font-normal">
              There are many variations of passages of available but it is the
              majority of suffered that a alteration in that some dummy text.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[#23262F] text-[16px]">About</h3>
            {footerLink1.map((link) => (
              <li className="text-[#777E90] mt-[32px] font-medium text-[14px]">
                {link.label}
              </li>
            ))}
          </div>
          <div className="">
            <h3 className="font-bold text-[#23262F] text-[16px]">Support</h3>
            {footerLink2.map((link) => (
              <li className="text-[#777E90] mt-[32px] font-medium text-[14px]">
                {link.label}
              </li>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xs text-[#23262F] font-bold">
              Join our community 🔥
            </h3>
            <form
              className="border-2 border-[#E6E8EC] w-[327px] lg:w-[255px] h-[48px] rounded-[90px] flex items-center p-[14px_16px] justify-between"
              action=""
            >
              <input
                className="text-[#777E90] text-[14px] font-normal"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-(--green) text-(--white) w-[32px] h-[32px] rounded-full flex items-center justify-center">
                <ArrowRight />
              </button>
            </form>
          </div>
        </div>
        <p className="text-[#353945] text-center mt-[73px] mb-[24px] text-xs font-semibold">
          Copyright © Tripie. All rights reserved
        </p>
      </footer>
    </>
  );
};

export default MainLayout;
