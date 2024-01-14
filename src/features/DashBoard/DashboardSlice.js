import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllData, UpdateOneData } from "./DashboardApi";

const initialState = {
  data: [],
  status: "idle",
};

export const fetchAllDataAsync = createAsyncThunk(
  "data/fetchAllData",
  async () => {
    const response = await fetchAllData();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const UpdateOneDataAsync = createAsyncThunk(
  "order/UpdateOneOrder",
  async (dataToUpdate) => {
    const response = await UpdateOneData(dataToUpdate);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllDataAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAllData = (state) => state.data.data;
export const selectStatus = (state) => state.data.status;

export default dataSlice.reducer;
