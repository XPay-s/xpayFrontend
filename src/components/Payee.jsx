import React from "react";
import { images } from "../contants/images";

function Payee() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[420px] bg-dark-slate-grey rounded-lg p-4 shadow-lg m-4">
        <h2 className="text-white-smoke text-sm mb-3">Recent payees</h2>
        <div className="flex items-center justify-between space-x-4">
          <div className="flex flex-col items-center space-y-1">
            <div className="flex items-center justify-center rounded-full bg-[#EC7E00] h-16 w-16 text-white-smoke text-lg font-semibold">
              M
            </div>
            <p className="text-white-smoke text-xs font-medium">Mario</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <img
              src={images.person}
              alt="Dylan"
              className="h-16 w-16 rounded-full object-cover"
            />
            <p className="text-white-smoke text-xs font-medium">Dylan</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <div className="flex items-center justify-center rounded-full bg-[#EC7E00] h-16 w-16 text-white-smoke text-lg font-semibold">
              L
            </div>
            <p className="text-white-smoke text-xs font-medium">Louis</p>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Payee;
