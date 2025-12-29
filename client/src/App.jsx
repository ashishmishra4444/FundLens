import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Landing = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
