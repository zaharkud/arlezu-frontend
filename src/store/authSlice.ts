import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

interface initialStateTypes {
  email: string | null;
  token: string | null;
}

const initialState: initialStateTypes = {
  email: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<initialStateTypes>) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: action.payload.email,
          token: action.payload.token,
        })
      );
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logOut: (state) => {
      localStorage.clear();
      state.email = null;
      state.token = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectAuth = (state: RootState) => state.auth;

export const selectCurrentUser = (state: any) => state.auth.user;
export const selectCurrentToken = (state: any) => state.auth.token;
