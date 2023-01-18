import { createSlice } from "@reduxjs/toolkit";

interface initialStateTypes {
  cardStep: number;
}

const initialState: initialStateTypes = {
  cardStep: 1,
};

const cardsHelperSlice = createSlice({
  name: "cardsStep",
  initialState,
  reducers: {
    changeStep(state, action) {
      state.cardStep = +action.payload;
    },
  },
});

export const { changeStep } = cardsHelperSlice.actions;

export default cardsHelperSlice.reducer;
