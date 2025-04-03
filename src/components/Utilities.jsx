import React from "react";
import { icons } from "../contants/icon";

function Utilities() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[400px] bg-dark-slate-grey m-4 rounded-lg drop-shadow-lg shadow-deep-charcoal p-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col justify-center items-center">
            <img src={icons.internet} alt="" className="h-6 mb-2" />
            <div className="text-center text-sm">Data</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={icons.water} alt="" className="h-6 mb-2" />
            <div className="text-center text-sm">Water</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={icons.electricity} alt="" className="h-6 mb-2" />
            <div className="text-center text-sm">Electricity</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={icons.tv} alt="" className="h-6 mb-2" />
            <div className="text-center text-sm">TV Cables</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={icons.vechile} alt="" className="h-6 mb-2" />
            <div className="text-center text-sm">Vehicle</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={icons.house} alt="" className="h-6 mb-2" />
            <div className="text-center text-sm">Rent Bill</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={icons.invest} alt="" className="h-6 mb-2" />
            <div className="text-center text-sm">Investment</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={icons.more} alt="" className="h-6 mb-2" />
            <div className="text-center text-sm">More</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utilities;
