import axiosClient from "./axiosClient";

var token = localStorage.getItem("access_token");
const userApi = {
  register(data) {
    const url = "/api/auth/register";
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = "/api/auth/login";
    return axiosClient.post(url, data);
  },
  get(id) {
    const url = `/api/user/${id}`;
    return axiosClient.get(url, {
      headers: {
        authorization: `${token}`,
      },
    });
  },
  async getAll() {
    const url = "/api/user";
    const userList = await axiosClient.get(url, {
      headers: {
        authorization: `${token}`,
      },
    });
    return {
      users: userList,
    };
  },
};

export default userApi;
