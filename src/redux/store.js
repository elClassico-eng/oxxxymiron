import { configureStore } from "@reduxjs/toolkit";
import tourRedusers from "./slice/Tour";
import trackRedusers from "./slice/Traks";

export const store = configureStore({
    devTools: true,
    reducer: { tour: tourRedusers, track: trackRedusers },
});
