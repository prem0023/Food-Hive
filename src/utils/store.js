const { configureStore } = require("@reduxjs/toolkit");
import cartSlice from "./cartSlice";
import restroSlice from "./restroSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restro: restroSlice,
  },
});

export default store;
