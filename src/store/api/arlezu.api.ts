import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const arlezuAPI = createApi({
  reducerPath: "arlezu/api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:5000/api" }),
  endpoints: (build) => ({
    getAllCards: build.query<any, void>({
      query: () => "cards",
    }),
  }),
});

export const { useGetAllCardsQuery } = arlezuAPI;
