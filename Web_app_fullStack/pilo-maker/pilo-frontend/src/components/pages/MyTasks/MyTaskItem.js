import React, { Fragment, useState, useEffect } from "react";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import Moment from "react-moment";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";

import CongViecDetailModal from "../ProjectPage/MainProjectPage/ProjectBoard/CongViecDetail/CongViecDetailModal";
import { getTask } from "redux/actions/tasks";
function MyTaskItem(task, index) {
  let [taskDetailOpen, setTaskDetailOpen] = useState(false);

  const taskDetail = task.task;
  function openTaskDetailModal() {
    setTaskDetailOpen(true);
  }
  function closeTaskDetailModal() {
    setTaskDetailOpen(false);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTask(taskDetail.id));
  }, [dispatch]);
  return (
    <>
      <tr
        key={index}
        className="hover:bg-gray-100 cursor-pointer"
        onClick={openTaskDetailModal}
      >
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {taskDetail.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {taskDetail.projectName}
          {/* {project.name} */}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <Moment format="DD/MM/YYYY">{taskDetail.duedate}</Moment>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {/* {person.status_task} */}{" "}
          {taskDetail.progress === 100 ? (
            <div className="flex flex-row">
              <span>Đã hoàn thành</span>
              <BadgeCheckIcon className="w-5 h-5 ml-1 text-green-600" />
            </div>
          ) : (
            `${taskDetail.progress}%`
          )}
        </td>

        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <div className="flex flex-col">
            {taskDetail.members.map((member) => (
              <span>{member.username}</span>
            ))}
          </div>
        </td>
      </tr>
      <Transition appear show={taskDetailOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeTaskDetailModal}
        >
          <CongViecDetailModal
            taskId={taskDetail.id}
            listId={taskDetail.listId}
            closeTaskDetailModal={closeTaskDetailModal}
            projectId={taskDetail.projectId}
          />
        </Dialog>
      </Transition>
    </>
  );
}

export default MyTaskItem;
