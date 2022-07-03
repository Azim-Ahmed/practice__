import axiosClient from "./axiosClient";
var token = localStorage.getItem("access_token");
const projectApi = {
  async getAll() {
    const url = "/api/projects";
    const projectList = await axiosClient.get(url, {
      headers: {
        authorization: `${token}`,
      },
    });
    return {
      projects: projectList,
    };
  },
  get(id) {
    const url = `/api/projects/${id}`;
    return axiosClient.get(url, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
  create(data) {
    const url = "/api/projects";
    return axiosClient.post(url, data, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
  edit(data, id) {
    const url = `/api/projects/${id}`;
    return axiosClient.patch(url, data, {
      headers: {
        authorization: `${token}`,
      },
    })
  },
  remove(id) {
    const url = `/api/projects/${id}`;
    return axiosClient.delete(url, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
  addMember(userId, projectId) {
    const url = `/api/projects/addMember/${userId}/${projectId}`;
    return axiosClient.put(
      url,
      {
        userId: userId,
        projectId: projectId,
      },
      {
        headers: {
          authorization: `${token}`,
        },
      }
    );
  },
  addAdmin(userId, projectId) {
    const url = `/api/projects/addAdmin/${userId}/${projectId}`;
    return axiosClient.put(
      url,
      {
        userId: userId,
        projectId: projectId,
      },
      {
        headers: {
          authorization: `${token}`,
        },
      }
    );
  },
  editPermission(data, projectId) {
    const url = `/api/projects/editPermission/${projectId}`;
    return axiosClient.patch(
      url,
      {
        permissions: data,
      },
      {
        headers: {
          authorization: `${token}`,
        },
      }
    );
  },
};

export default projectApi;
