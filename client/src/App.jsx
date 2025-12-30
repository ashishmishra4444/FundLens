import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const LandingPage = lazy(() => import("./pages/LandingPage"));

const App = () => {
  return (
    <Suspense
      fallback={
        <div style={{ padding: "40px", textAlign: "center" }}>Loading...</div>
      }
    >
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
