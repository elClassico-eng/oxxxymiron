import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled, { keyframes } from "styled-components";
import { rollIn } from "react-animations";
import { getLocaleDateString } from "../../utils/common";

import {
    fetchTraksData,
    selectTrackItem,
    selectIsLoading,
} from "../../redux/slice/Traks";

import { Section } from "../Section/Section";
import { Subtitle } from "../Subtitle/Subtitle";
import { Link } from "react-router-dom";

const RollIn = styled.div`
    animation: 6s ${keyframes`${rollIn}`};
`;

export const Track = () => {
    const dispatch = useDispatch();

    const tracksItems = useSelector(selectTrackItem);
    const isLoading = useSelector(selectIsLoading);

    const filteredItems = Array.from(tracksItems).filter((_, i) => i < 3);

    useEffect(() => {
        dispatch(fetchTraksData());
    }, [dispatch]);

    return (
        <Section className="tracks-section">
            <div className="container">
                <Subtitle text="Релизы" />

                {isLoading ? (
                    <p>Loading</p>
                ) : (
                    <div className="tracks">
                        {filteredItems.map(({ date, link, title }) => {
                            return (
                                <RollIn key={title} className="track-item">
                                    <div className="track">
                                        <div className="track-image">
                                            <img src={link.url} alt={title} />
                                        </div>
                                        <p className="track-date">
                                            {getLocaleDateString(date, {})}
                                        </p>
                                        <h3 className="track-title">{title}</h3>
                                    </div>
                                </RollIn>
                            );
                        })}
                    </div>
                )}
                <Link to="/tracks" className="button-more">
                    Все релизы
                </Link>
            </div>
        </Section>
    );
};
