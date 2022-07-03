import userSlice from "./reducers/auth/userSlice";
import listSlice from "./reducers/list/listSlice";
import projectSlice from "./reducers/project/projectSlice";
import taskSlice from "./reducers/task/taskSlice";
import fileSlice from "./reducers/file/fileSlice";
const { configureStore } = require("@reduxjs/toolkit");
const rootReducer = {
  user: userSlice,
  project: projectSlice,
  task: taskSlice,
  list: listSlice,
  file: fileSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
