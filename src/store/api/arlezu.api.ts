import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { REACT_APP_API_URL } from "services/consts/app.consts";

export const arlezuAPI = createApi({
  reducerPath: "arlezu/api",
  baseQuery: fetchBaseQuery({
    baseUrl: /*"http://localhost:5000/api"*/ `${REACT_APP_API_URL}/api`,
  }),
  endpoints: (build) => ({
    getAllCards: build.query<any, void>({
      query: () => "cards",
    }),

    getCardsByPage: build.query<any, number | void>({
      query: (page = 1, limit = 5) => `cards?page=${page}&limit=${limit}`,
    }),

    getActiveCards: build.query<any, any | void>({
      query: (userId) => ({
        url: `activeCards?userId=${userId}`,
        method: "GET",
        headers: {
          userId,
        },
      }),
    }),

    createActiveCard: build.mutation<any, any | void>({
      query: (body: {
        userId: Number;
        cardId: Number;
        repeatTime?: Number;
        isSelected?: Boolean;
      }) => ({
        url: "activeCards",
        method: "POST",
        body,
      }),
    }),

    changeRepeatTime: build.mutation<any, any | void>({
      query: (body: {
        userId: Number;
        cardId: Number;
        repeatTime: Number;
      }) => ({
        url: "activeCards/changeRepeatTime",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetAllCardsQuery,
  useGetCardsByPageQuery,
  useGetActiveCardsQuery,
  useCreateActiveCardMutation,
  useChangeRepeatTimeMutation,
} = arlezuAPI;
