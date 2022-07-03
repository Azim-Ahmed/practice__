import React, { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import AddCongViecModal from "../../../../congviec/AddCongViecModal";
import useWindowSize from "../../../../../hooks/useWindowSize";
import FilterModule from "./FilterModule/FilterModule";
import TaskItem from "./TaskItem";
import { useSelector, useDispatch } from "react-redux";
import { getTasks, getTasksByProjectId } from "redux/actions/tasks";
import { getLists } from "redux/actions/lists";
import { useParams } from "react-router-dom";
import useProjectDetail from "hooks/useProjectDetail";
function TaskList() {
  let [addJobOpen, setAddJobOpen] = useState(false);
  const projectId = useParams();
  const projectIdFormat = projectId.id;
  const [width, height] = useWindowSize();
  const [listId, setListId] = useState("-1");
  const [listName, setListName] = useState("");
  const projectListHeight = height - 75;
  function closeAddJobModal() {
    setAddJobOpen(false);
  }

  function openAddJobModal() {
    setAddJobOpen(true);
  }

  const tasks = useSelector((state) => state.task.tasks);
  const lists = useSelector((state) => state.list.lists);
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    setListId(e.target.value);
    setListName(e.target.options[e.target.selectedIndex].text);
  };
  useEffect(() => {
    dispatch(getLists(projectIdFormat));
  }, [dispatch]);
  useEffect(() => {
    if (listId === "-1") {
      dispatch(getTasksByProjectId(projectIdFormat))
    } else {
      dispatch(getTasks(listId));
    }
  }, [listId]);

  const getNameById = (id) => {
     let list = lists.find(x => x.id === id);
     return list?.name;
  }

  var user = localStorage.getItem("user");
  var userObject = JSON.parse(user);
  var userId = userObject.id;
  let addTaskButton;
  const { project, loading } = useProjectDetail(projectIdFormat);
  var identify = "";
  if (loading) {
    return "";
  } else {
    const normalRole = project.members.filter((e) => e.role === "normal");
    if (normalRole.some((e) => e.user === userId)) {
      identify = "member";
    } else {
      identify = "admin";
    }
  }
  if (identify === "admin") {
    addTaskButton = (
      <tr>
        <td></td>
        <td
          onClick={openAddJobModal}
          className="text-teal-500 font-medium text-sm cursor-pointer px-5 py-4"
        >
          + Thêm công việc
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  } else if (identify === "member") {
    if (project.permissions.includes("addTask")) {
      addTaskButton = (
        <tr>
          <td></td>
          <td
            onClick={openAddJobModal}
            className="text-teal-500 font-medium text-sm cursor-pointer px-5 py-4"
          >
            + Thêm công việc
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
    } else {
      addTaskButton = (
        <></>
      )
    }
  }
  return (
    <div className="flex flex-col">
      <div className="">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-3">
          <div
            className="shadow overflow-auto border-b border-gray-200 sm:rounded-lg"
            style={{ height: `${projectListHeight}px` }}
          >
            <FilterModule />
            <div className="flex flex-row py-3 w-full bg-white items-center space-x-2">
              <span className="text-black block ml-3">List</span>
              <div>
                <select onChange={(e) => handleSelect(e)}>
                  <option value="-1" selected>
                    All
                  </option>
                  {lists.map((l) => (
                    <option value={`${l.id}`}>{l.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50 sticky top-0">
                <tr className="bg-white border-b">
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    STT
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Task name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    List
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Progress
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Deadline
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Members
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tasks?.map((task, index) => (
                  <TaskItem
                    task={task}
                    listId={task.listId}
                    listName={getNameById(task.listId)}
                    index={index}
                  />
                ))}
                {addTaskButton}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Transition appear show={addJobOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeAddJobModal}
        >
          <AddCongViecModal />
        </Dialog>
      </Transition>
    </div>
  );
}

export default TaskList;
