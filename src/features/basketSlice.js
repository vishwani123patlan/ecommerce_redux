import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addItemToBasket: (state, action)=>{
      state.items = [...state.items, action.payload]
    },
    removeItemFromBasket: (state, action)=>{
      let copyOfBasket = state.items 
      const index = state.items.findIndex((items) => items.id === action.payload.id)
      console.log(index, action.payload.id)
      if (index !== -1){
        copyOfBasket.splice(index, 1);
        state.items = copyOfBasket
      }
      else{
        alert("This item is not in basket")
      }
    },
  }

})


export const { addItemToBasket,  removeItemFromBasket} = basketSlice.actions;

export const selectItems = (state) => state.basket.items;

export const basketCount = (state) => state.basket.items.length;

export default basketSlice.reducer;