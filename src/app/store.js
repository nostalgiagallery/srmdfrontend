import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/DashBoard/DashboardSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
