import { GET_LISTS } from "../types";
import listApi from "api/listApi";
export const getLists = (projectId) => async (dispatch) => {
  const { lists } = await listApi.getAll(projectId);
  dispatch({
    type: GET_LISTS,
    payload: lists.data,
  });
};
