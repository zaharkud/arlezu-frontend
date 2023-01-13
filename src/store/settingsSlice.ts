import { createSlice } from "@reduxjs/toolkit";

interface initialStateTypes {
  profileImg: string;
  repeatCardsRange: number;
  newCardsRange: number;
  isAuth: boolean;
}

const initialState: initialStateTypes = {
  profileImg: "1",
  repeatCardsRange: 50,
  newCardsRange: 10,
  isAuth: false,
};

const settingsSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    changeProfileImg(state, action) {
      state.profileImg = String(action.payload);
    },
    changeRepeatCardsRange(state, action) {
      state.repeatCardsRange = +action.payload;
    },
    changeNewCardsRange(state, action) {
      state.newCardsRange = +action.payload;
    },
    changeIsAuth(state, action) {
      state.isAuth = action.payload;
    },
  },
});

export const {
  changeProfileImg,
  changeRepeatCardsRange,
  changeNewCardsRange,
  changeIsAuth,
} = settingsSlice.actions;

export default settingsSlice.reducer;
