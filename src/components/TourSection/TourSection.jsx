import React, { useEffect } from "react";

import { Section } from "../Section/Section";
import { Subtitle } from "../Subtitle/Subtitle";

import { useDispatch, useSelector } from "react-redux";

import {
    fetchTourData,
    selectTourItem,
    selectisLoading,
} from "../../redux/slice/Tour";
import { TourItem } from "./TourItem";
import { Link } from "react-router-dom";

export const TourSection = () => {
    const dispatch = useDispatch();
    const tourItems = useSelector(selectTourItem);
    const isLoading = useSelector(selectisLoading);

    const filteredItems = Array.from(tourItems)
        .filter(({ soldOut }) => !soldOut)
        .filter((_, i) => i < 5);

    console.log(filteredItems);

    useEffect(() => {
        dispatch(fetchTourData());
    }, [dispatch]);

    return (
        <Section className="tour">
            <div className="container">
                <Subtitle text="Концерты" />
                {isLoading ? (
                    "Loading"
                ) : (
                    <ul className="tour-list">
                        {filteredItems.map((item, i) => (
                            <TourItem {...item} i={i} key={i} />
                        ))}
                    </ul>
                )}
                <Link to="/tour" className="button-more">
                    Все концерты
                </Link>
            </div>
        </Section>
    );
};
