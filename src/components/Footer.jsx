import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { icons } from "../contants/icon";

function Footer() {
  const [active, setActive] = useState("dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.split("/")[1];
    setActive(currentPath || "dashboard");
  }, [location]);

  const handleNavigation = (page) => {
    setActive(page);
    navigate(`/${page}`);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#1E1E2F",
      }}
    >
      <div
        className="flex flex-row justify-around items-center p-2 rounded-lg shadow-lg bg-dark-slate-grey"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
        }}
      >
        <div
          onClick={() => handleNavigation("dashboard")}
          className="flex flex-col items-center"
        >
          <img src={icons.house} alt="Dashboard" className="h-8" />
          {active === "dashboard" && (
            <div className="w-2 h-2 bg-light-slate rounded-full mt-1"></div>
          )}
        </div>

        <div
          onClick={() => handleNavigation("details")}
          className="flex flex-col items-center"
        >
          <img src={icons.invoice} alt="Invoice" className="h-8" />
          {active === "details" && (
            <div className="w-2 h-2 bg-light-slate rounded-full mt-1"></div>
          )}
        </div>

        <div
          onClick={() => handleNavigation("convert")}
          className="flex flex-col items-center"
        >
          <div className="bg-golden-honey rounded-full p-2 m-2">
            <img src={icons.convert} alt="Convert" className="h-8" />
          </div>
        </div>

        <div
          onClick={() => handleNavigation("notifications")}
          className="flex flex-col items-center"
        >
          <img src={icons.bell} alt="Notifications" className="h-8" />
          {active === "notifications" && (
            <div className="w-2 h-2 bg-light-slate rounded-full mt-1"></div>
          )}
        </div>

        <div
          onClick={() => handleNavigation("profile")}
          className="flex flex-col items-center"
        >
          <img src={icons.profile} alt="Profile" className="h-8" />
          {active === "profile" && (
            <div className="w-2 h-2 bg-light-slate rounded-full mt-1"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;
