import {
  GET_TASKS,
  GET_TASK,
  ADD_CHECKLIST_ITEM,
  EDIT_CHECKLIST_ITEM,
  COMPLETE_CHECKLIST_ITEM,
  DELETE_CHECKLIST_ITEM,
  ADD_TASK_MEMBER,
  EDIT_DESCRIPTION,
  DELETE_TASK,
  GET_TASKS_BY_USER_ID,
} from "../types";
import taskApi from "api/taskApi";
export const getTasks = (listId) => async (dispatch) => {
  const { tasks } = await taskApi.getAll(listId);
  dispatch({
    type: GET_TASKS,
    payload: tasks.data,
  });
};
export const getTasksByProjectId = (projectId) => async (dispatch) => {
  const { tasks } = await taskApi.getTasksByProjectId(projectId);
  dispatch({
    type: GET_TASKS,
    payload: tasks.data,
  });
}
export const getTasksByUserId = (userId) => async (dispatch) => {
  const { tasks } = await taskApi.getAllByUserId(userId);
  dispatch({
    type: GET_TASKS_BY_USER_ID,
    payload: tasks.data,
  });
};
export const getTask = (id) => async (dispatch) => {
  const task = await taskApi.get(id);
  dispatch({
    type: GET_TASK,
    payload: task.data,
  });
};
export const addChecklistItem = (taskId, data) => async (dispatch) => {
  const checklist = await taskApi.addChecklist(taskId, data);
  dispatch({
    type: ADD_CHECKLIST_ITEM,
    payload: checklist.data,
  });
};
export const editChecklistItem = (taskId, itemId, data) => async (dispatch) => {
  const checklist = await taskApi.editChecklist(taskId, itemId, data);
  dispatch({
    type: EDIT_CHECKLIST_ITEM,
    payload: checklist.data,
  });
};
export const completeChecklistItem = (formData) => async (dispatch) => {
  const checklist = await taskApi.completeChecklist(formData);
  dispatch({
    type: COMPLETE_CHECKLIST_ITEM,
    payload: checklist.data,
  });
};
export const deleteChecklistItem = (taskId, itemId) => async (dispatch) => {
  const checklist = await taskApi.deleteChecklist(taskId, itemId);
  dispatch({
    type: DELETE_CHECKLIST_ITEM,
    payload: checklist.data,
  });
};
export const addTaskMember = (formData) => async (dispatch) => {
  const { add, taskId, userId } = formData;
  const member = await taskApi.addMember(add, taskId, userId);
  dispatch({
    type: ADD_TASK_MEMBER,
    payload: member.data,
  });
};
export const editTaskDescription = (formData, taskId) => async (dispatch) => {
  const { description } = await taskApi.editTaskDescription(formData, taskId)
  dispatch({
    type: EDIT_DESCRIPTION,
    payload: description.data,
  });
};

export const deleteTask = (listId, taskId) => async (dispatch) => {
  const res = await taskApi.deleteTask(listId, taskId);
  dispatch({
    type: DELETE_TASK,
    payload: res.data,
  });
};