import React, { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CongViecDetailModal from "./CongViecDetail/CongViecDetailModal";
import Moment from "react-moment";
import { useSelector, useDispatch } from "react-redux";
import { getTask } from "redux/actions/tasks";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { useParams } from "react-router-dom";
function TaskItem({ task, listName, listId, index }) {
  let [taskDetailOpen, setTaskDetailOpen] = useState(false);
  const projectId = useParams();
  const projectIdFormat = projectId.id
  function openTaskDetailModal() {
    setTaskDetailOpen(true);
  }
  function closeTaskDetailModal() {
    setTaskDetailOpen(false);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTask(task.id));
  }, [dispatch]);
  return (
    <>
      <tr
        key={index}
        className="hover:bg-gray-100 cursor-pointer"
        onClick={openTaskDetailModal}
      >
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {index + 1}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {task.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {/* {person.group_task} */} {listName}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {/* {person.status_task} */}{" "}
          {task.progress == 100 ? (
            <div className="flex flex-row">
              <span>Đã hoàn thành</span>
              <BadgeCheckIcon className="w-5 h-5 ml-1 text-green-600" />
            </div>
          ) : (
            "Chưa hoàn thành"
          )}
        </td>
        <td className="flex flex-row  px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <Moment format="DD/MM/YYYY">{task.start_date}</Moment>
          <span className="block"> - </span>
          <Moment format="DD/MM/YYYY">{task.end_date}</Moment>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <div className="flex flex-col">
            {task.members.map((member) => (
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
            taskId={task.id}
            listId={listId}
            projectId={projectIdFormat}
            closeTaskDetailModal={closeTaskDetailModal}
            task={task}
            taskDetailOpen={taskDetailOpen}
            setTaskDetailOpen={setTaskDetailOpen}
          />
        </Dialog>
      </Transition>
    </>
  );
}

export default TaskItem;
