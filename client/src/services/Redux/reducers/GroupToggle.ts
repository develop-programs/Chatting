import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: boolean;
}

const initialState: CounterState = {
  value: false,
};

export const GroupToggle = createSlice({
  name: "counter",
  initialState,
  reducers: {
    openToggle: (state) => {
      state.value = true;
    },
    closeToggle: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openToggle, closeToggle } = GroupToggle.actions;

export default GroupToggle.reducer;
