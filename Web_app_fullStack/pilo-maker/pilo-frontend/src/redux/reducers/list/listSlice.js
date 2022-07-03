import { GET_LISTS } from "../../types";
const initialState = {
  lists: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_LISTS:
      return {
        ...state,
        lists: payload,
      };
    default:
      return state;
  }
}
