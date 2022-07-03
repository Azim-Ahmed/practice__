import axiosClient from "./axiosClient";
var token = localStorage.getItem("access_token");
const taskApi = {
  async getAll(listId) {
    const url = `/api/tasks/listCards/${listId}`;
    const tasks = await axiosClient.get(url, {
      headers: {
        authorization: `${token}`,
      },
    });
    return {
      tasks: tasks,
    };
  },
  async getTasksByProjectId(projectId) {
    const url = `/api/tasks/getByProjectId/${projectId}`;
    const tasks = await axiosClient.get(url, {
      headers: {
        authorization: `${token}`,
      },
    });
    return {
      tasks: tasks,
    };
  },
  async getAllByUserId(userId) {
    const url = `/api/tasks/getAllByUserId/${userId}`;
    const tasks = await axiosClient.get(url, {
      headers: {
        authorization: `${token}`,
      },
    });
    return {
      tasks: tasks,
    };
  },
  get(id) {
    const url = `/api/tasks/${id}`;
    return axiosClient.get(url, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
  create(data, projectId, listId, projectName) {
    const url = `/api/tasks/${projectId}/${listId}/${projectName}`;
    return axiosClient.post(url, data, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
  addMember(add, taskId, userId) {
    const url = `/api/tasks/addMember/${add}/${taskId}/${userId}`;
    return axiosClient.patch(
      url,
      {
        add: add,
        taskId: taskId,
        userId: userId,
      },
      {
        headers: {
          authorization: `${token}`,
        },
      }
    );
  },
  updateProgress(data, id) {
    const url = `/api/tasks/progress/${id}`;
    return axiosClient.patch(url, data, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
  addChecklist(taskId, data) {
    const body = JSON.stringify(data);
    const url = `/api/checklists/${taskId}`;
    return axiosClient.post(url, body, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
  editChecklist(taskId, itemId, data) {
    const body = JSON.stringify(data);
    const url = `/api/checklists/${taskId}/${itemId}`;
    return axiosClient.patch(url, body, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
  completeChecklist(formData) {
    const { taskId, complete, itemId } = formData;
    const url = `/api/checklists/${taskId}/${complete}/${itemId}`;
    return axiosClient.patch(url, formData, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
  deleteChecklist(taskId, itemId) {
    const url = `/api/checklists/${taskId}/${itemId}`;
    return axiosClient.delete(url, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
  editTask(data, id) {
    const url = `/api/tasks/${id}`;
    return axiosClient.patch(url, data, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
  deleteTask(listId, taskId) {
    const url = `/api/tasks/delete/${listId}/${taskId}`;
    return axiosClient.delete(url, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
};
export default taskApi;
