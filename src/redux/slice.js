import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
const producturl = process.env.REACT_APP_API_KEY;

// Define an initial state
const initialState = {
    categoryList: [
        { name: "Food" },
        { name: "Transportation" },
        { name: "Entertainment" },
        { name: "Traveling" },
      ], 
  loading: false,
  error: null,
};

const commonreducer = createSlice({
  name: "commonreducer",
  initialState,
  reducers: {
    // Define an action to set the category list
    setCategoryList: (state, action) => {
      state.categoryList = action.payload;
    },
    // Define an action to set loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    // Define an action to set error state
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCategoryList, setLoading, setError } = commonreducer.actions;
export default commonreducer.reducer;
