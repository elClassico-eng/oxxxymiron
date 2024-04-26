import React from "react";
import { MainBanner } from "./MainBanner";
import { TourSection } from "../TourSection/TourSection";
import { TourBanner } from "./TourBanner";
import { Track } from "../Tracks/Track";
import { ShopBanner } from "./ShopBanner";
import { News } from "../News/News";

export const Home = () => {
    return (
        <main className="main">
            <MainBanner />
            <TourSection />
            <TourBanner />
            <Track />
            <ShopBanner />
            <News />
        </main>
    );
};
