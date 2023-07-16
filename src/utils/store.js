import cartSlice from "./cartSlice";
import restroSlice from "./restroSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restro: restroSlice,
  },
});

export default store;
