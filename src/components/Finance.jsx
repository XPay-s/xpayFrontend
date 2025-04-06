import React from "react";
import { images } from "../contants/images";

function Finance() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[420px] h-full flex flex-col text-white-smoke justify-between">
        <div className="bg-dark-slate-grey m-4 rounded-lg drop-shadow-lg shadow-deep-charcoal p-4 space-y-4">
          <div>
            {" "}
            <div className="text-md text-light-slate ">Total Wealth</div>
            <div className="text-3xl font-semibold">€ 300</div>
          </div>
          <div>
            <div className="flex flex-row justify-between items-center mb-6">
              <div className="flex flex-row items-center">
                <img src={images.crypto} alt="" className="h-14" />
                <div className="flex flex-col ml-4">
                  <div className="text-lg font-medium">Crypto</div>
                  <div className="text-sm text-light-slate">
                    Invest for as little as €1
                  </div>
                </div>
              </div>
              <div className="text-lg font-semibold">€200</div>
            </div>
            <div className="flex flex-row justify-between items-center mb-6">
              <div className="flex flex-row items-center">
                <img src={images.cash} alt="" className="h-14" />
                <div className="flex flex-col ml-4">
                  <div className="text-lg font-medium">Cash</div>
                </div>
              </div>
              <div className="text-lg font-semibold">€100</div>
            </div>
            <div className="flex flex-row justify-between items-center mb-6">
              <div className="flex flex-row items-center">
                <img src={images.invest} alt="" className="h-14" />
                <div className="flex flex-col ml-4">
                  <div className="text-lg font-medium">Invest</div>
                  <div className="text-sm text-light-slate">
                    Invest for as little as €1
                  </div>
                </div>
              </div>
              <div className="text-lg font-semibold">€0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finance;
