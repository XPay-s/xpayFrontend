import React from "react";
import { images } from "../contants/images";

function TransactionHistory() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[420px] bg-dark-slate-grey m-4 rounded-lg drop-shadow-lg shadow-deep-charcoal p-4">
        <div>
          <div className="flex flex-row justify-between items-center mb-4">
            <div className="text-md font-semibold text-light-slate">
              Transaction History
            </div>
            <div className="text-light-slate">Amount</div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row justify-between items-center p-4 bg-gray-800 rounded-lg hover:bg-deep-charcoal transition duration-200 ease-in-out">
              <div className="flex flex-row items-center space-x-4">
                <div className="relative">
                  <img
                    src={images.displayTrans}
                    alt="Transaction"
                    className="h-12 w-12 rounded-full border border-gray-700"
                  />
                  <img
                    src={images.displayTrans}
                    alt="Transaction"
                    className="h-4 w-4 rounded-full border border-gray-700 absolute bottom-0 right-0"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-sm text-white">Payment Received</div>
                  <div className="text-xs text-light-slate">From John Doe</div>
                </div>
              </div>
              <div className="text-sm text-green-500 font-semibold">
                +$150.00
              </div>
            </div>

            <div className="flex flex-row justify-between items-center p-4 bg-gray-800 rounded-lg hover:bg-deep-charcoal transition duration-200 ease-in-out">
              <div className="flex flex-row items-center space-x-4">
                <div className="relative">
                  <img
                    src={images.displayTrans}
                    alt="Transaction"
                    className="h-12 w-12 rounded-full border border-gray-700"
                  />
                  <img
                    src={images.displayTrans}
                    alt="Transaction"
                    className="h-4 w-4 rounded-full border border-gray-700 absolute bottom-0 right-0"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-sm text-white">Payment Received</div>
                  <div className="text-xs text-light-slate">From John Doe</div>
                </div>
              </div>
              <div className="text-sm text-green-500 font-semibold">
                +$150.00
              </div>
            </div>
          </div>
          <div className="text-center text-blue justify-center mt-2 p-4 border-1 border-deep-charcoal rounded-lg font-semibold text-lg cursor-pointer hover:bg-deep-charcoal transition duration-200 ease-in-out">
            See All
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory;
