import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchNewsData } from "../../redux/slice/News";
import { selectNewsItem, selectIsLoading } from "../../redux/slice/News";

export const News = () => {
    const dispatch = useDispatch();

    const newsItem = useSelector(selectNewsItem);
    const isLoading = useSelector(selectIsLoading);

    const filteredINewsItems = Array.from(newsItem);

    useEffect(() => {
        dispatch(fetchNewsData());
    }, [dispatch]);

    return <div>News</div>;
};
