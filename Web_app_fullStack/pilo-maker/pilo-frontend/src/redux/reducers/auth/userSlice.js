import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import StorageKeys from "constants/storage-keys";
export const registerUser = createAsyncThunk(
  "/api/auth/register",
  async (payload) => {
    //call API to register
    const data = await userApi.register(payload);
    console.log(data.data.data);
    // save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.data.data.token);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.data.data));
    //return user data
    return data.data.data;
  }
);
export const loginUser = createAsyncThunk(
  "/api/auth/login",
  async (payload) => {
    //call API to register
    const data = await userApi.login(payload);
    console.log(data.data.data);
    // save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.data.data.token);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.data.data));
    //return user data
    return data.data.data;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem('user')) || {},
  },
  reducers: {
    logout(state) {
      // clear local storage 
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN)
      state.current = {};
    }
  },
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions
export default reducer;
