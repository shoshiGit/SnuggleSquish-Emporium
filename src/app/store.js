import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import orderSlice from "../features/order/orderSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    order: orderSlice,
    
  },
});
