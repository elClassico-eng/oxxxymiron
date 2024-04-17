import React from "react";
import { MainBanner } from "./MainBanner";
import { TourSection } from "../TourSection/TourSection";
import { TourBanner } from "./TourBanner";

export const Home = () => {
    return (
        <main className="main">
            <MainBanner />
            <TourSection />
            <TourBanner />
        </main>
    );
};
