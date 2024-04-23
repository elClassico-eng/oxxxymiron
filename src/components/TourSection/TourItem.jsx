import React from "react";

import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";

import { getLocaleDateString } from "../../utils/common";

import { Icon } from "../Icon/Icon";

const FadeInDown = styled.div`
    animation: 6s ${keyframes`${fadeInDown} infinite `};
`;

export const TourItem = ({
    ticketLink,
    date,
    city,
    place,
    soldOut,
    videoLink,
    i,
}) => {
    return (
        <li>
            <FadeInDown className="tour-item">
                <div className="tour-item__info">
                    <div className="tour-item__date">
                        {getLocaleDateString(date, {})}
                    </div>
                    <p className="tour-item__place">{place}</p>
                </div>
                <p className="tour-item__city">{city}</p>

                {!soldOut ? (
                    <a
                        href={videoLink || ticketLink}
                        className="tour-item__button"
                    >
                        {ticketLink ? (
                            <>
                                <span>Билеты</span>
                                <Icon name="arrow-right" />
                            </>
                        ) : (
                            <span>Video</span>
                        )}
                    </a>
                ) : (
                    <button className="tour-item__button soldOut">
                        Sold out
                    </button>
                )}
            </FadeInDown>
        </li>
    );
};
