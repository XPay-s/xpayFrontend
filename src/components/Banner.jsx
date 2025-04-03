import React, { useState, useEffect } from "react";
import { icons } from "../contants/icon";

function Banner() {
  const banners = [
    {
      title: "Invite friends, earn €50",
      description: "Earn €50 for each friend you invite by 26 March. T&C apply",
    },
    {
      title: "Get 10% cashback",
      description: "Shop with us and get 10% cashback on all purchases.",
    },
    {
      title: "Free delivery for a month",
      description: "Subscribe now and enjoy free delivery for 30 days.",
    },
    {
      title: "Win a €100 gift card",
      description: "Participate in our survey and stand a chance to win.",
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [banners.length]);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[420px] h-full flex flex-col text-white-smoke justify-between">
        <div className="flex flex-col bg-dark-slate-grey m-4 rounded-lg drop-shadow-lg shadow-deep-charcoal p-4 space-y-4">
          <div className="flex flex-row justify-between items-start">
            <div className="flex flex-col space-y-2">
              <div className="text-lg font-semibold text-white">
                {banners[currentBanner].title}
              </div>
              <div className="text-sm text-light-slate">
                {banners[currentBanner].description}
              </div>
            </div>
            <img src={icons.close} alt="Close" className="h-6 cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-center space-x-2 mt-2 rounded-full">
          {banners.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentBanner ? "bg-white-smoke" : "bg-light-slate"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
