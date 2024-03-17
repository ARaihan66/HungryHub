import { createSlice } from "@reduxjs/toolkit";

export const CategorySlice = createSlice({
  name: "counter",
  initialState: {
    category: "All",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});


export const {setCategory } = categorySlice.actions;

export default CategorySlice.reducer;
