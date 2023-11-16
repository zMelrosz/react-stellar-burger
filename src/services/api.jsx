import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BURGER_API_URL = "https://norma.nomoreparties.space/api";

export const burgerApi = createApi({
  reducerPath: "burgerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://norma.nomoreparties.space/api" }),
  endpoints: (builder) => ({
    getIngredients: builder.query({ query: () => "/ingredients" }),
    postOrder: builder.mutation({
      query: (orderDetails) => ({
        url: '/orders',
        method: 'POST',
        body: orderDetails
      })
    })
  }),
});

export const { useGetIngredientsQuery, usePostOrderMutation } = burgerApi;
