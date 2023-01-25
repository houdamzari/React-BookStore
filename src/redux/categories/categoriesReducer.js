import types from "../types";

const initialState = {
  categories: [],
};

export const checkStatus = (status) => ({
  type: types.CHECK_STATUS,
  payload: "under construction",
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECK_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export default categoriesReducer;
