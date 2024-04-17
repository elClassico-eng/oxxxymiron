import React from "react";

import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";

import { Icon } from "../Icon/Icon";

const RollIn = styled.div`
    animation: 3s ${keyframes`${fadeInDown} infinite `};
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
            <RollIn className="tour-item">
                <div className="tour-item__info">
                    <div className="tour-item__date">
                        {new Date(date).toLocaleDateString("ru-RU", {
                            month: "numeric",
                            day: "numeric",
                            year: "numeric",
                        })}
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
            </RollIn>
        </li>
    );
};
