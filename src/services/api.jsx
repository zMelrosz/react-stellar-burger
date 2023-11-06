import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' 

export const BURGER_API_URL = "https://norma.nomoreparties.space/api";

export const burgerApi = createApi({
    reducerPath: 'burgerApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://norma.nomoreparties.space/api" }),
    endpoints: (builder) => ({
        getIngredients: builder.query({ query: () => '/ingredients'})
    }),
});

export const selectGetIngredientsResult = burgerApi.endpoints.getIngredients.select();

export const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

 export const postData = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

  return await res;
}

export const { useGetIngredientsQuery } = burgerApi;