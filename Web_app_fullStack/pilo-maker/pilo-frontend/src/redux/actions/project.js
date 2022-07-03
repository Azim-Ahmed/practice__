import { GET_PROJECTS, DELETE_PROJECT, GET_PROJECT, EDIT_PERMISSION } from "../types";
import projectApi from "api/projectApi";
export const getProjects = () => async (dispatch) => {
  const { projects } = await projectApi.getAll();
  dispatch({
    type: GET_PROJECTS,
    payload: projects.data,
  });
};
export const deleteProject = (id) => async (dispatch) => {
  const { projects } = await projectApi.remove(id);
  dispatch({
    type: DELETE_PROJECT,
    payload: projects.data,
  });
};
export const getProject = (id) => async (dispatch) => {
  const project = await projectApi.get(id);
  dispatch({
    type: GET_PROJECT,
    payload: project.data
  })
}

export const editPermission = (data, projectId) => async (dispatch) => {
  const { permissions } = await projectApi.editPermission(data, projectId)
  dispatch({
    type: EDIT_PERMISSION,
    payload: permissions.data
  })
}