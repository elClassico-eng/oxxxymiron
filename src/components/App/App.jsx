import React from "react";
import { Header } from "../Header/Header";
import { AppRoutes } from "./AppRoutes";
import { Footer } from "../Footer/Footer";

import "../../style/index.scss";

export const App = () => {
    return (
        <>
            <Header />
            <AppRoutes />
            <Footer />
        </>
    );
};
