import { createSlice } from "@reduxjs/toolkit";

const restroSlice = createSlice({
  name: "restroData",
  initialState: {
    restaurant: [],
    filteredRestaurant: [],
  },
  reducers: {
    addRestro: (state, action) => {
      state.restaurant = [...state.restaurant, ...action.payload];
    },
    addFilteredRestro: (state, action) => {
      state.filteredRestaurant = [...action.payload];
    },
  },
});

export default restroSlice.reducer;
export const { addRestro, addFilteredRestro } = restroSlice.actions;
