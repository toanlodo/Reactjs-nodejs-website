import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    totalAmount:0,
};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const existingProduct = state.items.find(item => item.id === action.payload.id);

            if (existingProduct) {////////
                existingProduct.quantity += 1; 
            } else {
                const productWithQuantity = { ...action.payload, quantity: 1 };
                state.items.push(productWithQuantity);
            }
            state.totalAmount += action.payload.price;
        },
        increaseQuantity: (state, action) => {
            const existingProduct = state.items.find(item => item.id === action.payload);
            if (existingProduct) {
                existingProduct.quantity += 1;
                state.totalAmount += existingProduct.price;
            }
        },
        decreaseQuantity: (state, action) => {
            const existingProduct = state.items.find(item => item.id === action.payload);
            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
                state.totalAmount -= existingProduct.price;
            }
        },
        removeFromCart: (state,action)=>{
            const existingProduct = state.items.find(item=> item.id === action.payload);
            if(existingProduct){
                state.totalAmount -= existingProduct.price * existingProduct.quantity;
            }
            
            state.items= state.items.filter(item=>item.id !== action.payload)
        },
        clearCart : (state)=>{
            state.items = [];
            state.totalAmount = 0;
        }
    },
});

export const { addToCart, increaseQuantity, decreaseQuantity,removeFromCart, clearCart } = cartSlice.actions;
export const selectCartItemsCount = (state) => state.cart.items.length;
export default cartSlice.reducer;
