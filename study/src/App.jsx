import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load components
const Home = lazy(() => import("./page/Home"));
const Deaf = lazy(() => import("./page/Deaf/Deaf"));
const Blind = lazy(() => import("./page/Blind/Blind"));
const Home1 = lazy(() => import("../src/page/Alluser/Home1"));
const SignLanguage = lazy(() => import("./page/Deaf/pages/SignLanguage"));
const VisualLearning = lazy(() => import("./page/Deaf/pages/VisualLearning"));
const Gamification = lazy(() => import("./page/Deaf/pages/Gamification"));
const Accessibility = lazy(() => import("./page/Deaf/pages/Accessibility"));
const DProfile = lazy(() => import("./page/Deaf/components/DProfile"));
const Canvas = lazy(() => import("./page/Deaf/pages/Canvas"));
const Signgame = lazy(() => import("./page/Deaf/components/Signgame"));
const Meet = lazy(() => import("./page/Deaf/pages/Meet"));
const PlanYourDay = lazy(() => import("./page/Deaf/pages/PlanYourDay"));
const SignAuth = lazy(() => import("./page/Deaf/components/Auth"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/deaf" element={<Deaf />} />
          <Route path="/blind" element={<Blind />} />
          <Route path="/home" element={<Home />} />
          

          <Route path="/allusers" element={<Home1 />} />
          <Route path="/signlang" element={<SignLanguage />} />
          <Route path="/visual-learning" element={<VisualLearning />} />
          <Route path="/gamification-deaf" element={<Gamification />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/dprofile" element={<DProfile />} />
          <Route path="/canvas" element={<Canvas />} />
          <Route path="/signgame" element={<Signgame />} />
          <Route path="/deaf-meet" element={<Meet />} />
          <Route path="/deaf-planyourday" element={<PlanYourDay />} />
          <Route path="/authdeaf" element={<SignAuth />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
