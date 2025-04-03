import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../assets/styles/global.css";
import OnboardOne from "../pages/onboarding/OnboardOne";
import OnboardTwo from "../pages/onboarding/OnboardTwo";
import OnboardThree from "../pages/onboarding/OnboardThree";
import OnboardFour from "../pages/onboarding/OnboardFour";
import Home from "../pages/dashboard/Home";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/onboardone" element={<OnboardOne />} />
        <Route path="/onboardtwo" element={<OnboardTwo />} />
        <Route path="/onboardthree" element={<OnboardThree />} />
        <Route path="/onboardfour" element={<OnboardFour />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
