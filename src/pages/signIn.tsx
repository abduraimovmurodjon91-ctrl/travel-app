import signIn from "../assets/img/Left (1).png";
import favicon from "../assets/img/favicon.jpg";
import { FaGoogle, FaApple } from "react-icons/fa";
import Button from "../ui/button";

import { signin } from "../auth";
import { useState } from "react";


const SignIn = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const handleSignIn = async () => {
    try {
      await signin({ email, password })
    }
    catch (err) {
      console.log("Error", err)
    }
  }
  return (
    <section className="">
      <div className="flex ">
        <div className="overflow-y-hidden">
          <img className="hidden  lg:flex" src={signIn} alt="" />
        </div>
        <div className=" flex flex-1 flex-col justify-center text-center mt-[200px] lg:mt-0 items-center">
          <div className="w-[80px] h-[80px]">
            <img className="w-full h-full " src={favicon} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[40px] font-bold text-[#23262F]">Sign In</h1>
            <p className="text-[#777E90] font-normal text-[16px]">
              {" "}
              Use Your OpenID to Sign up
            </p>
          </div>
          <div className="flex gap-2 mt-[32px]">
            <button className="w-[144px] flex items-center justify-center gap-2 h-12 rounded-[40px] border-2 border-[#E6E8EC]">
              <FaGoogle />
              Google
            </button>
            <button className="w-[144px] flex items-center justify-center gap-2 h-12 rounded-[40px] border-2 border-[#E6E8EC]">
              <FaApple size={20} />
              Apple ID
            </button>
          </div>
          <div className="mt-[32px]">
            <p className="text-xs text-[#777E90] font-normal">
              Or continue with email
            </p>
            <div className="w-[352px] mt-[32px] h-12 text-[14px] font-medium text-[#23262F] rounded-[40px] flex items-center justify-start px-[24px] border-2 border-[#E6E8EC]">
              <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="Enter your email" className="" />
            </div>
            <div className="w-[352px] mt-[32px] h-12 text-[14px] font-medium text-[#23262F] rounded-[40px] flex items-center justify-start px-[24px] border-2 border-[#E6E8EC]">
              <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" placeholder="Password" />
            </div>
            <p className="text-xs font-semibold flex items-center justify-center mt-[32px]  text-[#23262F]">
              Forgot password?
            </p>
            <Button
              onClick={handleSignIn}
              btnText="Login"
              className="bg-(--green) mt-[32px] text-(--white) w-[120px] h-[40px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
