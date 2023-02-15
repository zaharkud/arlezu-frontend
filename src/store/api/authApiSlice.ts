import { arlezuAPI } from "./arlezu.api";

export const authApiSlice = arlezuAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: { email: String; password: String }) => ({
        url: "/users/login",
        method: "POST",
        body,
      }),
    }),
    registration: builder.mutation({
      query: (body: { name: String; email: String; password: String }) => ({
        url: "/users/registration",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation } = authApiSlice;
