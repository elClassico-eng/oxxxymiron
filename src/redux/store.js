import { configureStore } from "@reduxjs/toolkit";
import tourRedusers from "./slice/Tour";

export const store = configureStore({
    devTools: true,
    reducer: { tour: tourRedusers },
});
