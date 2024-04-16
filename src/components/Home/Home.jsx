import React from "react";
import { MainBanner } from "./MainBanner";
import { TourSection } from "../TourSection/TourSection";

export const Home = () => {
    return (
        <main className="main">
            <MainBanner />
            <TourSection />
        </main>
    );
};
