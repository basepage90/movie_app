import { createSlice, configureStore } from "@reduxjs/toolkit";

const initState = {text : "어벤져스"};

const searchReducer = createSlice({
  name: "searchReducer",
  initialState: initState,
  reducers: {
    update : (state,action) => ( {text: action.payload} )
  }
});

const store = configureStore({reducer:searchReducer.reducer});

export const {update} = searchReducer.actions;

export default store;