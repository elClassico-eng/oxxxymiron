import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { MENU_URL_NEWS } from "../../utils/constants";

import axios from "axios";

export const fetchNewsData = createAsyncThunk(
    "newsItemsSlice/fetchNewsData",
    async () => {
        try {
            const { data } = await axios.get(MENU_URL_NEWS);
            return data;
        } catch (err) {
            return err;
        }
    }
);

const initialState = {
    newsItem: [],
    isLoading: true,
};

const newsItemsSlice = createSlice({
    name: "news",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchNewsData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchNewsData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.newsItem = action.payload;
            })
            .addCase(fetchNewsData.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const selectNewsItem = (state) => state.news.newsItem;
export const selectIsLoading = (state) => state.news.isLoading;

export default newsItemsSlice.reducer;
