import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { icons } from "../../contants/icon";
import { images } from "../../contants/images";

function EditProfile() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleCancel = () => {
    setName("");
    setEmail("");
    setPhone("");
    setUsername("");
    navigate(-1);
  };

  const handleUpdate = () => {
    console.log("Profile Updated with: ", { name, email, phone, username });

    navigate("/profile");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate();
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
            Edit Profile
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
          <div className="mt-4 ">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="text-lg text-white-smoke">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-85 h-lg border-1 border-light-slate bg-dark-slate-grey text-white-smoke rounded-lg p-2 mt-2 mb-4"
                  placeholder="John Deo"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-lg text-white-smoke">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-85 h-lg border-1 border-light-slate bg-dark-slate-grey text-white-smoke rounded-lg p-2 mt-2 mb-4"
                  placeholder="johndeo@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-lg text-white-smoke">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-85 h-lg border-1 border-light-slate bg-dark-slate-grey text-white-smoke rounded-lg p-2 mt-2 mb-4"
                  placeholder="1234567890"
                />
              </div>
              <div>
                <label htmlFor="username" className="text-lg text-white-smoke">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-85 h-lg border-1 border-light-slate bg-dark-slate-grey text-white-smoke rounded-lg p-2 mt-2 mb-4"
                  placeholder="john"
                />
              </div>
            </form>
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-4">
            <div
              className="text-1xl text-golden-honey border-2 rounded-lg border-golden-honey p-2 m-2  items-center justify-center w-full text-center cursor-pointer"
              onClick={handleCancel}
            >
              Cancel
            </div>
            <div
              className="text-1xl text-deep-charcoal bg-golden-honey rounded-lg p-2 m-2  items-center justify-center w-full text-center cursor-pointer"
              onClick={handleSubmit}
            >
              Update
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
