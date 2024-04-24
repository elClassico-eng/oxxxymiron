import React from "react";

import { Link } from "react-router-dom";

import styled, { keyframes } from "styled-components";
import { fadeInLeft, fadeInRight } from "react-animations";

import logo from "../../images/oxxxyshop.webp";
import banner from "../../images/banner.webp";

import { Section } from "../Section/Section";

const FadeInLeft = styled.div`
    animation: 6s ${keyframes`${fadeInLeft}`};
`;
const FadeInRight = styled.div`
    animation: 6s ${keyframes`${fadeInRight}`};
`;

export const ShopBanner = () => {
    return (
        <Section className="shop-banner__section">
            <div className="container">
                <div className="shop-banner__wrapper">
                    <Link to="/shop" className="shop-banner">
                        <FadeInLeft className="shop-banner__text">
                            <p className="shop-banner__subtitle">
                                Обновленный мерч от Оксимирона
                            </p>
                            <h3 className="shop-banner__title">
                                Oxxxyshop 2.0
                            </h3>
                        </FadeInLeft>
                        <FadeInRight className="shop-banner__logo shop-logo">
                            <img src={logo} alt="Logo shop" />
                        </FadeInRight>
                        <FadeInRight className="shop-banner__banner">
                            <img src={banner} alt="Banner shop" />
                        </FadeInRight>
                    </Link>
                </div>
            </div>
        </Section>
    );
};
