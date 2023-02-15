import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { REACT_APP_API_URL } from "services/consts/app.consts";

export const arlezuAPI = createApi({
  reducerPath: "arlezu/api",
  baseQuery: fetchBaseQuery({ baseUrl: `${REACT_APP_API_URL}/api` }),
  endpoints: (build) => ({
    getAllCards: build.query<any, void>({
      query: () => "cards",
    }),
    getCardsByPage: build.query<any, number | void>({
      query: (page = 1, limit = 5) => `cards?page=${page}&limit=${limit}`,
    }),
  }),
});

export const { useGetAllCardsQuery, useGetCardsByPageQuery } = arlezuAPI;

