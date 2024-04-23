import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { MENU_URL_TRACKS } from "../../utils/constants";

import axios from "axios";

export const fetchTraksData = createAsyncThunk(
    "trackItemsSlice/fetchTracksData",
    async () => {
        try {
            const { data } = await axios.get(MENU_URL_TRACKS);
            return data;
        } catch (err) {
            return err;
        }
    }
);

const initialState = {
    trackItem: [],
    isLoading: true,
};

const traksItemsSlice = createSlice({
    name: "track",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTraksData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTraksData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.trackItem = action.payload;
            })
            .addCase(fetchTraksData.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const selectTrackItem = (state) => state.track.trackItem;
export const selectIsLoading = (state) => state.track.isLoading;

export default traksItemsSlice.reducer;
