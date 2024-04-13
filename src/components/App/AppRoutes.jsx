import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    );
};
