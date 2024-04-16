import React, { useEffect } from "react";

import { Section } from "../Section/Section";
import { Subtitle } from "../Subtitle/Subtitle";

import { useDispatch } from "react-redux";

import { fetchTourData } from "../../redux/slice/Tour";

export const TourSection = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTourData());
    }, [dispatch]);

    return (
        <Section className="tour">
            <div className="container">
                <Subtitle text="Концерты" />
            </div>
        </Section>
    );
};
