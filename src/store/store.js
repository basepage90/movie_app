import { createStore } from "redux";

const UPDATE = "UPDATE";
const DELETE = "DELETE";

const update = text => {
  return {
    type: UPDATE,
    text
  };
};

const reducer = (state = {text:"어벤져스"}, action) => {
  switch (action.type) {
    case UPDATE:
      return { text: action.text};
    case DELETE:
      return state.filter(toDo => toDo !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {update};

export default store;