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
    increaseQuantity: (state, action: PayloadAction<ICartProduct>) => {
      const foundItem = state.products.find(
        (item) =>
          item._id === action.payload._id && item.color === action.payload.color && item.size === action.payload.size
      );
      foundItem.quantity++;
    },
    decreaseQuantity: (state, action: PayloadAction<ICartProduct>) => {
      const foundItem = state.products.find(
        (item) =>
          item._id === action.payload._id && item.color === action.payload.color && item.size === action.payload.size
      );
      foundItem.quantity--;
    },
    changeSize: (state, action: PayloadAction<{ product: ICartProduct; newSize: string }>) => {
      const foundItem = state.products.find(
        (item) => item._id === action.payload.product._id && item.color === action.payload.product.color
      );
      foundItem.size = action.payload.newSize;
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const { addProduct, clearCart, decreaseQuantity, increaseQuantity, changeSize } = cartSlice.actions;
export default cartSlice.reducer;
