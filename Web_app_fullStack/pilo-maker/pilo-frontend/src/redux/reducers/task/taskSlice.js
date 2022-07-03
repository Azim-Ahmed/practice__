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
} from "../../types";
const initialState = {
  tasks: [],
  task: null,
  tasksByProjectId: []
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TASKS:
    case GET_TASKS_BY_USER_ID:
      return {
        ...state,
        tasks: payload,
      };
    case GET_TASK:
      return {
        ...state,
        task: { ...state.task, ...payload },
      };
    case ADD_CHECKLIST_ITEM:
    case EDIT_CHECKLIST_ITEM:
    case COMPLETE_CHECKLIST_ITEM:
    case ADD_TASK_MEMBER:
    case DELETE_CHECKLIST_ITEM:
    case EDIT_DESCRIPTION:
      return {
        ...state,
        task: { ...state.task, ...payload },
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: payload,
      };
    default:
      return state;
  }
}
