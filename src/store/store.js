import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

const initState = {text : "어벤져스"};

const update = createAction("UPDATE")


//  possible mutate state or return state
const reducer = createReducer(initState,{
  [update]: (state,action) => ( {text: action.payload} )
});

const store = configureStore({reducer});

export const actionCreators = {update};

export default store;