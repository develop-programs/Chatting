import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: boolean;
}

const initialState: CounterState = {
  value: false,
};

export const SearchToggle = createSlice({
  name: "counter",
  initialState,
  reducers: {
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { open, close } = SearchToggle.actions;

export default SearchToggle.reducer;
