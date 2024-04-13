import React from "react";

import { Link } from "react-router-dom";

import logo from "../../images/logo.webp";

export const Logo = () => {
    return (
        <div className="logo">
            <Link to="/">
                <img
                    style={{ width: 150, height: 150 }}
                    src={logo}
                    alt="oxxxymiron"
                />
            </Link>
        </div>
    );
};
