import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchNewsData } from "../../redux/slice/News";
import { selectNewsItem, selectIsLoading } from "../../redux/slice/News";
import { Section } from "../Section/Section";

export const News = () => {
    const dispatch = useDispatch();

    const newsItem = useSelector(selectNewsItem);
    const isLoading = useSelector(selectIsLoading);

    const filteredINewsItems = Array.from(newsItem).filter((_, i) => i < 3);

    useEffect(() => {
        dispatch(fetchNewsData());
    }, [dispatch]);

    return (
        <div className="news-container">
            <Section>
                <div className="container">
                    <h2>Новости</h2>
                    <div className="news">
                        <img src="" alt="" />
                        <p className="news-text"></p>
                    </div>
                </div>
            </Section>
        </div>
    );
};
