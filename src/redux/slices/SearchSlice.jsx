import { createSlice } from "@reduxjs/toolkit";

export const SearchSlice = createSlice({
  name: "counter",
  initialState: {
    search: " ",
  },
  reducers: {
    setSearch: (state, action) => {
      state.saerch = action.payload;
    },
  },
});

export const { setSearch } = SearchSlice.actions;

export default SearchSlice.reducer;
