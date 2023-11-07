import { configureStore, createSlice } from "@reduxjs/toolkit";
import { burgerApi } from "./api";

export const burgerConstructorSlice = createSlice({
    name: "burgerConstructor",
    initialState: {
      selectedIngredients: [],
      totalPrice: 0,
    },
    reducers: {
      addIngredient: (state, action) => {
        state.selectedIngredients.push(action.payload);
        if(action.payload.type === 'bun') {
            state.totalPrice+= action.payload.price * 2;
        } else {
            state.totalPrice+= action.payload.price
        }
        
        console.log(state.totalPrice);
      },
      replaceBun: (state, action) => {
        const bunIndex = state.selectedIngredients.findIndex(
          (ingredient) => ingredient.type === "bun"
        );
        if (bunIndex !== -1) {
          state.selectedIngredients.splice(bunIndex, 1, action.payload);
        }
        console.log("store: There are no buns in selectedIngredients");
      },
    },
  });

  const preloadedState = {
    testState: "This is test state",
    selectedIngredients: [],
    totalPrice: 0,
    ingredientPopup: {
      isOpen: false,
      content: null,
    },
  };

export const store = configureStore({
    reducer: {
      [burgerApi.reducerPath]: burgerApi.reducer,
      burgerConstructor: burgerConstructorSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(burgerApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
     preloadedState: preloadedState,
  });
