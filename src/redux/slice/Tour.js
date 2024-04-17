import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { MENU_URL } from "../../utils/constants";

import axios from "axios";

export const fetchTourData = createAsyncThunk(
    "tourItemsSlice/fetchTourData",
    async () => {
        try {
            const { data } = await axios.get(MENU_URL);
            return data;
        } catch (err) {
            return err;
        }
    }
);

const initialState = {
    tourItem: [],
    isLoading: false,
};

const tourItemsSlice = createSlice({
    name: "tour",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTourData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTourData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tourItem = action.payload;
            })
            .addCase(fetchTourData.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const selectTourItem = (state) => state.tour.tourItem;
export const selectisLoading = (state) => state.tour.isLoading;

export default tourItemsSlice.reducer;
