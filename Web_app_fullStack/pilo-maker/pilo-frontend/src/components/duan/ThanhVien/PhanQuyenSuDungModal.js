import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import projectApi from "api/projectApi";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { getProject } from "redux/actions/project";
import { useSelector, useDispatch } from "react-redux";
import useProjectDetail from "hooks/useProjectDetail";
function PhanQuyenSuDungModal() {
  const [updateButton, setUpdateButton] = useState(true);
  const projectId = useParams();
  const projectIdReal = projectId.id;
  const dispatch = useDispatch()
  const { project, loading } = useProjectDetail(projectIdReal);
  const permissions = [];
  const handleCheck = (e) => {
    setUpdateButton(false);
    if (e.target.checked === true) {
      try {
        if (permissions.includes(e.target.name)) {
          return;
        } else {
          permissions.push(e.target.name);
        }
        console.log(permissions);
      } catch (error) {
        console.log(error);
      }
    } else {
      const index = permissions.indexOf(e.target.name);
      permissions.splice(index, 1);
    }
  };
  console.log(permissions);
  const handleSubmit = async () => {
    try {
      const editPermission = await projectApi.editPermission(
        permissions,
        projectIdReal
      );
      toast.success("Cập nhật thành công!", {
        position: "top-right",
        icon: "👏",
      });
    } catch (error) {
      toast.error("Cập nhật thất bại", {
        position: "top-right",
      });
      console.log(error);
    }
  };
  if (loading) {
    return "";
  }
  return (
    <div className="min-h-screen px-4 text-center">
      <Toaster />
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog.Overlay className="fixed inset-0" />
      </Transition.Child>

      {/* This element is to trick the browser into centering the modal contents. */}
      <span className="inline-block h-screen align-middle" aria-hidden="true">
        &#8203;
      </span>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="inline-block w-full h-full max-w-7xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
          <div className="px-[30px] py-8">
            <div>
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                  <div className="sm:flex-auto flex flex-row justify-between items-center">
                    <span className="text-black font-semibold text-2xl block">
                      Permissions
                    </span>
                    <div>
                      <button
                        className="btn btn-success text-white disabled:text-gray-500"
                        disabled={updateButton}
                        onClick={handleSubmit}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-col">
                  <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead className="">
                            <tr>
                              <th
                                scope="col"
                                colSpan={3}
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                Permissions
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Admin
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Member
                              </th>
                            </tr>
                          </thead>

                          <tbody className="divide-y divide-gray-200 bg-white">
                            <tr>
                              <td
                                colSpan={3}
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                <div className="flex flex-col">
                                  <span className="text-base font-medium">
                                    Add new task
                                  </span>
                                  <span className="text-xs font-normal text-gray-500">
                                    Add new task permission
                                  </span>
                                </div>
                              </td>
                              <td className="text-left pl-8">
                                <input type="checkbox" checked disabled />
                              </td>
                              <td className="text-left pl-10">
                                <input
                                  type="checkbox"
                                  name="addTask"
                                  id="addTask"
                                  defaultChecked={project.permissions.includes(
                                    "addTask"
                                  )}
                                  // defaultChecked={true}
                                  onChange={handleCheck}
                                />
                                {/* project.permissions.find((permission) => permission === e.target.name) */}
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={3}
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                <div className="flex flex-col">
                                  <span className="text-base font-medium">
                                    Add new list
                                  </span>
                                  <span className="text-xs font-normal text-gray-500">
                                    Users can add new list
                                  </span>
                                </div>
                              </td>
                              <td className="text-left pl-8">
                                <input type="checkbox" checked disabled />
                              </td>
                              <td className="text-left pl-10">
                                <input
                                  type="checkbox"
                                  name="addList"
                                  id="addList"
                                  defaultChecked={project.permissions.includes(
                                    "addList"
                                  )}
                                  onChange={handleCheck}
                                />
                              </td>
                            </tr>                           
                            <tr>
                              <td
                                colSpan={3}
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                <div className="flex flex-col">
                                  <span className="text-base font-medium">
                                    Assign task
                                  </span>
                                  <span className="text-xs font-normal text-gray-500">
                                    Assign task for users
                                  </span>
                                </div>
                              </td>
                              <td className="text-left pl-8">
                                <input type="checkbox" checked disabled />
                              </td>
                              <td className="text-left pl-10">
                                <input
                                  type="checkbox"
                                  name="assignTask"
                                  id="assignTask"
                                  onChange={handleCheck}
                                  defaultChecked={project.permissions.includes(
                                    "assignTask"
                                  )}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={3}
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                <div className="flex flex-col">
                                  <span className="text-base font-medium">
                                    Delete task
                                  </span>
                                  <span className="text-xs font-normal text-gray-500">
                                    Delete task role
                                  </span>
                                </div>
                              </td>
                              <td className="text-left pl-8">
                                <input type="checkbox" checked disabled />
                              </td>
                              <td className="text-left pl-10">
                                <input
                                  type="checkbox"
                                  name="deleteTask"
                                  id="deleteTask"
                                  onChange={handleCheck}
                                  defaultChecked={project.permissions.includes(
                                    "deleteTask"
                                  )}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={3}
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                <div className="flex flex-col">
                                  <span className="text-base font-medium">
                                    Edit task
                                  </span>
                                  <span className="text-xs font-normal text-gray-500">
                                    Edit task role
                                  </span>
                                </div>
                              </td>
                              <td className="text-left pl-8">
                                <input type="checkbox" checked disabled />
                              </td>
                              <td className="text-left pl-10">
                                <input
                                  type="checkbox"
                                  name="editTask"
                                  id="editTask"
                                  onChange={handleCheck}
                                  defaultChecked={project.permissions.includes(
                                    "editTask"
                                  )}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition.Child>
    </div>
  );
}

export default PhanQuyenSuDungModal;
