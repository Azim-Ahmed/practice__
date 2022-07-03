import { DELETE_PROJECT, GET_PROJECTS, GET_PROJECT, EDIT_PERMISSION } from "../../types";
const initialState = {
  projects: [],
  project: null,
  permissions: []
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
      };
    case GET_PROJECT:
      return {
        ...state,
        project: { ...state.project, ...payload },
      }
    case DELETE_PROJECT:
      return {
        ...state,
        projects: payload,
      }
    case EDIT_PERMISSION:
      return {
        ...state,
        permissions: payload,
      };
    default:
      return state;
  }
}
