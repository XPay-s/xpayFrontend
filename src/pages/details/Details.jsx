import React from "react";
import { icons } from "../../contants/icon";
import { images } from "../../contants/images";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const details = [
  { id: 1, to: "Marvilo", time: "29 Feb, 20:37", status: "Completed" },
  { id: 2, to: "Marvilo", time: "29 Feb, 20:37", status: "Completed" },
  { id: 3, to: "Marvilo", time: "29 Feb, 20:37", status: "Completed" },
  { id: 4, to: "Marvilo", time: "29 Feb, 20:37", status: "Completed" },
  { id: 5, to: "Marvilo", time: "29 Feb, 20:37", status: "Completed" },
  { id: 6, to: "Marvilo", time: "29 Feb, 20:37", status: "Completed" },
  { id: 7, to: "Marvilo", time: "29 Feb, 20:37", status: "Completed" },
  { id: 8, to: "Marvilo", time: "29 Feb, 20:37", status: "Completed" },
];

function Details() {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="w-full flex justify-center *:items-center bg-deep-charcoal h-full pb-24">
      <div className="w-full max-w-[420px] m-4">
        <div className="flex flex-row justify-start items-center p-4">
          <img
            src={icons.back}
            alt=""
            className="h-2 pr-12 w-s cursor-pointer"
            onClick={handleGoBack} 
          />
          <div className="text-1xl text-white-smoke font-semibold">Details</div>
        </div>
        <div className="flex flex-row justify-end items-center p-4 text-golden-honey">
          Mark all as read
        </div>
        <div>
          {details.map(({ id, to, time, status }) => (
            <div
              key={id}
              className="flex flex-row justify-start items-center p-2 hover:bg-dark-slate-grey rounded-lg mb-4"
            >
              <img src={images.crypto} alt="" className="h-12 rounded-full" />
              <div className="flex flex-col justify-start items-start pl-4 w-full col-auto">
                <div className="text-white-smoke">To {to}</div>
                <div className="text-light-slate">
                  {time} · UIScreens · {status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
