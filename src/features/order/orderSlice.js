import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
  address: "",
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const itemTo = state.basket.find((item) => item.id === action.payload.id);
      if (!itemTo) {
         state.basket = [...state.basket, { ...action.payload, qty: 1 }];
      } else {
         state.basket = state.basket.map((item) =>
            item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
         );
      }
   },
   
    isInCart: (state, action) => {
      let itemTo = state.basket.find((item) => item.id === action.payload.id);
      return !!itemTo; // Using !! to convert to boolean
    },
    setOrders: (state, action) => {
      return { ...state, orders: action.payload };
   },
   emptyBasket: (state, action) => {
    state.basket = [[],{...action.payload}]
       
},
   
    updateQuantity: (state, action) => {
      const { itemId, newQuantity } = action.payload;
      const itemToUpdate = state.basket.find((item) => item.id === itemId);

      if (itemToUpdate) {
        itemToUpdate.qty = newQuantity;
      }
    },
  },
});

export const { emptyBasket,addtoCart, setOrders, isInCart, updateQuantity } = orderSlice.actions;
export default orderSlice.reducer;
