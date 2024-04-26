import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "../Logo/Logo";

import { bounce } from "react-animations";
import styled, { keyframes } from "styled-components";

import { MENU } from "../../utils/constants";
import { Socials } from "../Socials/Socials";

const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}`};
`;

export const Header = () => {
    return (
        <section className="header">
            <div className="container">
                <header>
                    <Logo />
                    <nav className="menu">
                        {MENU.map(({ name, link }) => {
                            return (
                                <Bounce
                                    className="menu-item"
                                    key={name}
                                    animationIn="bounceIn"
                                    animationOut="bounceOut"
                                >
                                    <Link to={`/${link}`}>{name}</Link>
                                </Bounce>
                            );
                        })}
                    </nav>
                    <Socials />
                </header>
            </div>
        </section>
    );
};
