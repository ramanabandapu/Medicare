import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import LoginPage from "./LoginPage";


function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<h3>Error</h3>} />
      </Routes>
    </div>
  );
}

export { MainRoutes };
