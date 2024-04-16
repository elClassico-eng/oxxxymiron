import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { MENU_URL } from "../../utils/constants";

import axios from "axios";

export const fetchTourData = createAsyncThunk(
    "tourItemsSlice/fetchTourData",
    async () => {
        try {
            const { data } = await axios.get(MENU_URL);
            console.log(data);
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

export default tourItemsSlice.reducer;
