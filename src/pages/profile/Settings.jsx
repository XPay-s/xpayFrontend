import React from "react";
import { icons } from "../../contants/icon";
import { useNavigate } from "react-router-dom";

const settingsData = [
  { id: 1, icon: icons.profile, name: "Change Pin", arrows: icons.forward, path: "/change-pin" },
  { id: 2, icon: icons.profile, name: "2FA Authentication", arrows: icons.forward, path: "/2fa-authentication" },
  
];

function Settings() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleProfileItemClick = (path) => {
   
    navigate(path);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-deep-charcoal">
      <div className="w-full max-w-[420px] m-4">
        <div className="flex flex-row justify-start items-center p-4">
          <img
            src={icons.back}
            alt="Back"
            className="h-2 cursor-pointer w-s pr-12"
            onClick={handleGoBack}
          />
          <div className="text-1xl text-white-smoke font-semibold ml-4">
            Settings
          </div>
        </div>

        <div className="mt-6">
          {settingsData.map(({ id, icon, name, arrows, path }) => (
            <div
              key={id}
              className="flex flex-row justify-start items-center p-2 hover:bg-dark-slate-grey rounded-lg cursor-pointer"
              onClick={() => handleProfileItemClick(path)} 
            >
              <div className="flex flex-row justify-between items-center w-full p-4 rounded-lg">
                <div className="flex flex-row justify-start items-center">
                  <img src={icon} alt={name} className="h-7" />
                  <div className="text-xl text-white-smoke pl-6">{name}</div>
                </div>
                <div>
                  <img src={arrows} alt="Arrow" className="h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Settings;
