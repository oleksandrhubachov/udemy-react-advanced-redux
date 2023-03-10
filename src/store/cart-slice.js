import {createSlice} from "@reduxjs/toolkit";

let initialState = {items: [], totalQuantity: 0, changed: false};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItem(state, action) {
            state.totalQuantity++;
            const newItem = action.payload;
            const existingItem = state.items.find(i => i.id === newItem.id);
            state.changed = true;
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price;
            } else {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }
        },
        removeItem(state, action) {
            state.changed = true;
            state.totalQuantity--;
            const itemToRemove = action.payload;
            const existingItem = state.items.find(i => i.id === itemToRemove.id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(i => i.id !== itemToRemove.id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
