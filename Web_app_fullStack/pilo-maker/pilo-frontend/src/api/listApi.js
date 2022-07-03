import axiosClient from "./axiosClient";
var token = localStorage.getItem("access_token");
const listApi = {
  async getAll(projectId) {
    const url = `/api/lists/projectLists/${projectId}`;
    const lists = await axiosClient.get(url, {
      headers: {
        authorization: `${token}`,
      },
    });
    return {
      lists: lists,
    };
  },
  get(id) {
    const url = `/api/lists/${id}`;
    return axiosClient.get(url, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
  create(data, projectId) {
    const url = `/api/lists/${projectId}`;
    return axiosClient.post(url, data, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
};
export default listApi;
