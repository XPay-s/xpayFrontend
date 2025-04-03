import React from "react";
import { icons } from "../contants/icon";

function Header() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[420px]">
        <div className="flex flex-row justify-between p-4 items-center text-white-smoke bg-deep-charcoal">
          <div className="flex justify-between items-start flex-col">
            <div className="text-2xl">Hi, Samantha</div>
            <div className="text-light-slate">Your available balance</div>
          </div>
          <div className="text-3xl">$4,590.00</div>
        </div>
        <div className="flex flex-row bg-dark-slate-grey m-4 rounded-lg drop-shadow-lg shadow-dark-slate-grey p-[12px] justify-between">
          <div className="flex flex-col justify-between items-center">
            <img src={icons.topUp} alt="" className="h-6" />
            <div>Top up</div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img src={icons.send} alt="" className="h-6" />
            <div>Send</div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img src={icons.convert} alt="" className="h-6" />
            <div>Swap</div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img src={icons.withdraw} alt="" className="h-6" />
            <div>Withdraw</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;