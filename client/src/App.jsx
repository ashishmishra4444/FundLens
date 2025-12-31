import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

const App = () => {
  return (
    <AuthContextProvider>
      <Suspense
        fallback={
          <div style={{ padding: "40px", textAlign: "center" }}>Loading...</div>
        }
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </AuthContextProvider>
  );
};

export default App;
