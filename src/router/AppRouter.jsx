import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../assets/styles/global.css";
import OnboardOne from "../pages/onboarding/OnboardOne";
import OnboardTwo from "../pages/onboarding/OnboardTwo";
import OnboardThree from "../pages/onboarding/OnboardThree";
import OnboardFour from "../pages/onboarding/OnboardFour";
import Home from "../pages/dashboard/Home";
import SplashScreen from "../pages/splash/SplashScreen";
import Details from "../pages/details/Details";
import Profile from "../pages/profile/Profile";
import EditProfile from "../pages/profile/EditProfile";
import Settings from "../pages/profile/Settings";
import ChangePin from "../pages/profile/ChangePin";
import Authentication from "../pages/profile/Authentication";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SplashScreen />} />
        <Route path="/onboardone" element={<OnboardOne />} />
        <Route path="/onboardtwo" element={<OnboardTwo />} />
        <Route path="/onboardthree" element={<OnboardThree />} />
        <Route path="/onboardfour" element={<OnboardFour />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/change-pin" element={<ChangePin />} />
        <Route path="/2fa-authentication" element={<Authentication />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
