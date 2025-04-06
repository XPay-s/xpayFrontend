import React from "react";
import { icons } from "../../contants/icon";
import { useNavigate } from "react-router-dom";
import { images } from "../../contants/images";

const profileData = [
  { id: 1, icon: icons.profile, name: "Edit Profile", arrows: icons.forward },
  { id: 2, icon: icons.profile, name: "Settings", arrows: icons.forward },
  { id: 3, icon: icons.profile, name: "Referral", arrows: icons.forward },
  { id: 4, icon: icons.profile, name: "Linked Wallets", arrows: icons.forward },
  { id: 5, icon: icons.profile, name: "History", arrows: icons.forward },
  { id: 6, icon: icons.profile, name: "Help & Support", arrows: icons.forward },
];

function Profile() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleProfileItemClick = (name) => {
    switch (name) {
      case "Edit Profile":
        console.log("Navigate to Edit Profile");
        navigate("/edit-profile"); 
        break;
      case "Settings":
        console.log("Navigate to Settings");
        navigate("/settings"); 
        break;
      case "Referral":
        console.log("Navigate to Referral");
        navigate("/referral"); 
        break;
      case "Linked Wallets":
        console.log("Navigate to Linked Wallets");
        navigate("/linked-wallet"); 
        break;
      case "History":
        console.log("Navigate to History");
        navigate("/history"); 
        break;
      case "Help & Support":
        console.log("Navigate to Help & Support");
        navigate("/support"); 
        break;
      default:
        console.log("Unknown option");
        break;
    }
  };

  return (
    <div className="w-full flex justify-center items-center bg-deep-charcoal h-full pb-24">
      <div className="w-full max-w-[420px] m-4">
        <div className="flex flex-row justify-start items-center p-4">
          <img
            src={icons.back}
            alt="Back"
            className="h-2 cursor-pointer w-s pr-12"
            onClick={handleGoBack}
          />
          <div className="text-1xl text-white-smoke font-semibold ml-4">
            Profile
          </div>
        </div>

        <div className="flex flex-col items-center mt-8">
          <div className="relative">
            <img
              src={images.crypto}
              alt="Profile"
              className="h-32 w-32 rounded-full border-4 border-white"
            />
            <div className="absolute bottom-0 right-0 p-2 bg-golden-honey rounded-full cursor-pointer">
              <img src={icons.edit} alt="Edit" className="h-6" />
            </div>
          </div>
          <div className="text-2xl text-white-smoke mt-4">Ekundayo Covenant</div>
          <div className="text-sm text-light-slate">Software Engineer</div>
        </div>

        <div className="mt-6">
          {profileData.map(({ id, icon, name, arrows }) => (
            <div
              key={id}
              className="flex flex-row justify-start items-center p-2 hover:bg-dark-slate-grey rounded-lg cursor-pointer"
              onClick={() => handleProfileItemClick(name)} 
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

        <div
          className="text-lg text-[#FF3232] justify-center items-center pt-4 flex flex-row"
          onClick={() => console.log("Logging out...")} 
        >
          Log out
        </div>
      </div>
    </div>
  );
}

export default Profile;
