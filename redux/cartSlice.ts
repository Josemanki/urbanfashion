import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartProduct, ICartState, IProduct } from '../types/types';

interface cartState {
  products: ICartProduct[];
  quantity: number;
  total: number;
}

const initialState: cartState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ICartProduct>) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
