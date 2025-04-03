import React from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../contants/images";
import { icons } from "../../contants/icon";

function OnboardOne() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/onboardtwo");
  };

  return (
    <div className="bg-deep-charcoal h-screen w-screen flex flex-col text-white-smoke justify-between">
      <div className="flex justify-end text-golden-honey p-6 font-normal cursor-pointer">
        Skip
      </div>
      <div className="justify-center items-center flex flex-col">
        <img src={images.onboard1} alt="" className="h-[352px]" />
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
        Welcome to <span className="text-golden-honey">X</span>Pay
      </div>
      <div className="font-normal text-base pl-[24px] pt-12 pb-4 flex flex-row justify-between items-center mr-4">
        <img src={images.line1} alt="" className="h-1" />
        <div>
          <img
            src={icons.arrow}
            alt=""
            className="h-12 rounded-full bg-golden-honey"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
}

export default OnboardOne;
