import React from "react";
import { images } from "../../contants/images";
import { useNavigate } from "react-router-dom";
function OnboardFour() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/dashboard");
  };
  return (
    <div className=" bg-deep-charcoal h-screen w-screen flex flex-col  text-white-smoke justify-between  ">
      <div className="flex justify-end text-golden-honey p-6 font-normal ">
        Skip
      </div>
      <div className="justify-center items-center flex flex-col ">
        <img src={images.onboard4} alt="" className="h-[352px] " />
      </div>
      <div
        className="text-white-smoke font-semibold text-4xl pl-[24px] justify-start items-center mr-4"
        style={{
          fontFamily: "Poppins",
          lineHeight: "57.69px",
          letterSpacing: "0%",
          textTransform: "capitalize",
          verticalAlign: "bottom",
        }}
      >
        One Tap to Get Started
      </div>
      <div className="text-1xl text-dark-slate-grey pb-4 bg-golden-honey justify-center items-center m-4 p-4 rounded-lg font-semibold text-center" onClick={handleNext}>
        Connect Wallet
      </div>
    </div>
  );
}

export default OnboardFour;
