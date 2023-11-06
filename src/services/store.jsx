import { combineReducers } from 'redux'; 
import { configureStore } from '@reduxjs/toolkit';
import { burgerApi } from './api';

const preloadedState = {
    testState: 'This is test state',
    totalPrice: 0,
    ingredientPopup: {
        isOpen: false, 
        content: null
    }
}

export const store = configureStore({
    reducer: {
        [burgerApi.reducerPath]: burgerApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(burgerApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedState,
})