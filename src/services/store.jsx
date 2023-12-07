import { configureStore, createSlice } from "@reduxjs/toolkit";
import { burgerApi } from "./api";

// global loading state
const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isLoading: false,
  },
  reducers: {
    requestStart: (state) => {
      state.isLoading = true;
    },
    requestEnd: (state) => {
      state.isLoading = false;
    },
  },
});

const loadingMiddleware = () => (next) => (action) => {
  if (action.type.endsWith("/pending")) {
    store.dispatch(requestStart());
  } else if (action.type.endsWith("/fulfilled") || action.type.endsWith("/rejected")) {
    store.dispatch(requestEnd());
  }
  return next(action);
};

export const { requestStart, requestEnd } = loadingSlice.actions;

export const burgerConstructorSlice = createSlice({
  name: "burgerConstructor",
  initialState: {
    selectedIngredients: [],
    totalPrice: 0,
    orderInfo: null,
    ingredientPopup: {
      isOpen: false,
      content: null,
    },
    orderPopup: {
      isOpen: false,
      name: null,
      number: null,
    },
  },
  reducers: {
    addIngredient: (state, action) => {
      state.selectedIngredients.push(action.payload);
      if (action.payload.type === "bun") {
        state.totalPrice += action.payload.price * 2;
      } else {
        state.totalPrice += action.payload.price;
      }
    },
    addOrder: (state, action) => {
      state.orderInfo = action.payload;
    },
    replaceBun: (state, action) => {
      const bunIndex = state.selectedIngredients.findIndex((ingredient) => ingredient.type === "bun");
      if (bunIndex !== -1) {
        state.selectedIngredients.splice(bunIndex, 1, action.payload);
      }
      console.log("store: There are no buns in selectedIngredients");
    },
    openIngredientPopup: (state, action) => {
      if (action.payload) {
        state.ingredientPopup.content = action.payload;
        state.ingredientPopup.isOpen = true;
      }
    },
    closeIngredientPopup: (state, action) => {
      state.ingredientPopup.content = null;
      state.ingredientPopup.isOpen = false;
    },
    openOrderPopup: (state, action) => {
      console.log(state.orderPopup.isOpen);
      if (action.payload) {
        state.orderPopup.isOpen = true;
        state.orderPopup.name = action.payload.name;
        state.orderPopup.number = action.payload.name;
      }
    },
    closeOrderPopup: (state, action) => {
      state.orderPopup.isOpen = false;
      state.orderPopup.name = null;
      state.orderPopup.number = null;
    },
  },
});

export const store = configureStore({
  reducer: {
    [burgerApi.reducerPath]: burgerApi.reducer,
    burgerConstructor: burgerConstructorSlice.reducer,
    loading: loadingSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(burgerApi.middleware, loadingMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});
