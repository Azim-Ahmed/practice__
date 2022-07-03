import { UPLOAD_FILE, GET_FILES } from "../../types";
const initialState = {
  files: [],
  file: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FILES:
      return {
        ...state,
        files: payload,
      };
    case UPLOAD_FILE:
      return {
        ...state,
        file: { ...state.file, ...payload },
      };
    default:
      return state;
  }
}
