import React from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../contants/images";
import { icons } from "../../contants/icon";

function OnboardThree() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/onboardfour");
  };

  return (
    <div className="bg-deep-charcoal h-screen w-screen flex flex-col text-white-smoke justify-between">
      <div className="flex justify-end text-golden-honey p-6 font-normal">
        Skip
      </div>
      <div className="justify-center items-center flex flex-col">
        <img src={images.onboard3} alt="" className="h-[352px]" />
      </div>
      <div
        className="text-white-smoke pl-[24px] mr-4 font-semibold text-4xl"
        style={{
          fontFamily: "Poppins",
          lineHeight: "57.69px",
          letterSpacing: "0%",
          textTransform: "capitalize",
          verticalAlign: "bottom",
        }}
      >
        Fast and Reliable Market updated
      </div>
      <div className="font-normal text-base pl-[24px] pt-12 pb-4 flex flex-row justify-between items-center mr-4">
        <img src={images.line3} alt="" className="h-1" />
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

export default OnboardThree;
