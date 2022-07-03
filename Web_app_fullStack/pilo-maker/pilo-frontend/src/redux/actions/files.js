import { UPLOAD_FILE, GET_FILES } from "../types";
import fileApi from "api/fileApi";
export const uploadFile = (data, projectId) => async (dispatch) => {
  const file = await fileApi.uploadFile(data, projectId);
  dispatch({
    type: UPLOAD_FILE,
    payload: file.data,
  });
};

export const getFiles = (projectId) => async (dispatch) => {
  const { files } = await fileApi.getAll(projectId);
  dispatch({
    type: GET_FILES,
    payload: files.data,
  });
};
