import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getTasksByUserId } from "redux/actions/tasks";

import MyTaskItem from "./MyTaskItem";
function MyTasks() {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.current);
  const userId = loggedInUser.id;
  // const project = useSelector((state) => state.project.project);
  
  useEffect(() => {
    dispatch(getTasksByUserId(userId));
  }, [dispatch]);
  console.log(tasks);
  return (
    <div className="bg-white h-screen w-full">
      <div className="px-4 py-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-black font-semibold">
              Your to do list
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              All task you need to do
            </p>
          </div>
          
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Task name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                      >
                        Project
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                      >
                        Duedate
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                      >
                        Progress
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                      >
                        Members
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {tasks?.map((task, index) => (
                      <MyTaskItem task={task} index={index} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default MyTasks;
