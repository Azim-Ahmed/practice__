import axiosClient from "./axiosClient";
var token = localStorage.getItem("access_token");
const fileApi = {
  uploadFile(data, projectId) {
    const url = `/api/files/uploadFile/${projectId}`;
    return axiosClient.post(url, data, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
  async getAll(projectId) {
    const url = `/api/files/listFile/${projectId}`;
    const files = await axiosClient.get(url, {
      headers: {
        authorization: `${token}`,
      },
    });
    return {
      files: files,
    };
  },
};
export default fileApi;
