import { configureStore } from "@reduxjs/toolkit";
import tourRedusers from "./slice/Tour";
import trackRedusers from "./slice/Traks";
import newsRedusers from "./slice/News";

export const store = configureStore({
    devTools: true,
    reducer: { tour: tourRedusers, track: trackRedusers, news: newsRedusers },
});
