import { createSlice } from "@reduxjs/toolkit";

const restroSlice = createSlice({
  name: "restroData",
  initialState: {
    restaurant: [],
    filteredRestaurant: [],
    totalRestro: 15,
  },
  reducers: {
    addRestro: (state, action) => {
      state.restaurant = [...state.restaurant, ...action.payload];
    },
    addFilteredRestro: (state, action) => {
      state.filteredRestaurant = [...action.payload];
    },
    setTotalRestro: (state, action) => {
      state.totalRestro = state.restaurant.length + action.payload;
    },
  },
});

export default restroSlice.reducer;
export const { addRestro, addFilteredRestro, setTotalRestro } =
  restroSlice.actions;
