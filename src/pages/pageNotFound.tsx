import { NavLink, useRouteError } from "react-router-dom";
import NotFound from "../assets/img/IMG.png";

const PageNotFount = () => {
  const error = useRouteError() as { message?: string; statusText?: string };
  return (
    <section className="flex items-center text-center justify-center h-screen">
      <div>
        <div>
          <img src={NotFound} alt="" />
        </div>
        <div className="fle flex-col">
          <h1 className="font-bold text-[32px] lg:text-[40px] text-[#23262F]">
            Page not found
          </h1>
          <p className="text-[#777E90] font-normal mt-[16px] text-[14px] lg:text-[16px]">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <button className="w-[158px] text-[16px] font-bold bg-(--green) mt-[40px] text-(--white) h-12 rounded-[90px]">
            <NavLink to="/">Back To Home</NavLink>
          </button>
          <span className="mt-[32px] text-lg font-bold"> {error.message || error.statusText}</span>
        </div>
      </div>
    </section>
  );
};

export default PageNotFount;
