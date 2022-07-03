import React, { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { useParams } from "react-router-dom";
import useProjectDetail from "hooks/useProjectDetail";
import Moment from "react-moment";
import EditDuAnModal from "components/duan/EditDuAnModal";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import ThreeDotsWave from "components/loading/ThreeDotsWave";
import { useNavigate } from "react-router-dom";

import { deleteProject } from "redux/actions/project";
import QuanLyThanhVienModal from "components/duan/ThanhVien/QuanLyThanhVienModal";
import PhanQuyenSuDungModal from "components/duan/ThanhVien/PhanQuyenSuDungModal";
function ProjectDetailModal({ setViewProjectOpen }) {
  let navigate = useNavigate();
  const projectId = useParams();
  const realProjectId = projectId.id;
  const { project, loading } = useProjectDetail(projectId.id);
  let [addDuAnOpen, setAddDuAnOpen] = useState(false);
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const dispatch = useDispatch();
  const onDelete = async () => {
    dispatch(deleteProject(realProjectId));
    toast.success("Xóa dự án thành công!", {
      duration: 2000,
      position: "top-right",
      icon: "👏",
    });
    setTimeout(() => navigate("/dashboard"), 2000);
    await sleep(2000);
    window.location.reload();
  };
  function closeDuAnModal() {
    setAddDuAnOpen(false);
  }

  function openDuAnModal() {
    setAddDuAnOpen(true);
  }
  let [deleteDuAnOpen, setDeleteDuAnOpen] = useState(false);

  function closeDeleteDuAnModal() {
    setDeleteDuAnOpen(false);
  }

  function openDeleteDuAnModal() {
    setDeleteDuAnOpen(true);
  }
  let [quanlythanhvienOpen, setQuanlythanhvienOpen] = useState(false);

  function closeQuanlythanhvienModal() {
    setQuanlythanhvienOpen(false);
  }

  function openQuanlythanhvienModal() {
    setQuanlythanhvienOpen(true);
  }
  let [phanquyenOpen, setPhanquyenOpen] = useState(false);

  function closePhanquyenModal() {
    setPhanquyenOpen(false);
  }

  function openPhanquyenModal() {
    setPhanquyenOpen(true);
  }
  var user = localStorage.getItem("user");
  var userObject = JSON.parse(user);
  var userId = userObject.id;
  var identify = "";
  let toolBoxForAdmin;
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
    toolBoxForAdmin = (
      <>
        <button className="btn btn-primary " onClick={openPhanquyenModal}>
          Permissions
        </button>
        <button className="btn " onClick={openDuAnModal}>
          Edit project
        </button>
        <button
          className="btn btn-error text-white"
          onClick={openDeleteDuAnModal}
        >
          Delete project
        </button>
      </>
    );
  } else if (identify === "member") {
    toolBoxForAdmin = <></>;
  }
  return (
    <div className="min-h-screen px-4  text-center">
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#2ecc71",
              color: "white",
            },
          },
          error: {
            style: {
              background: "#e74c3c",
              color: "white",
            },
          },
        }}
      />
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
        <div className="inline-block border-2 border-gray-300 w-full h-full max-w-5xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
          <div className="px-[30px] py-[25px]">
            <div className="flex flex-row justify-between">
              <h1 className="text-xl text-black font-bold">Project Detail</h1>
              <img
                src={`${project.thumbnail}`}
                className="w-9 h-9 rounded-full"
                alt=""
              />
            </div>

            <hr className="mt-3 mb-3" />

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
                            Project name
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Start date
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            End date
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Description
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Admin
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {project.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <Moment format="DD/MM/YYYY">
                              {project.start_date}
                            </Moment>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <Moment format="DD/MM/YYYY">
                              {project.end_date}
                            </Moment>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 truncate max-w-xs text-sm text-gray-500">
                            {project.description}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {project.members.map((member) => {
                              if (member.role == "admin") {
                                return (
                                  <p className="text-black text-sm">
                                    {member.email}
                                  </p>
                                );
                              } else {
                                return "";
                              }
                            })}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 text-center justify-center flex flex-row space-x-4">
                    <button
                      className="btn btn-warning text-white"
                      onClick={openQuanlythanhvienModal}
                    >
                      Members
                    </button>
                    {toolBoxForAdmin}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition.Child>
      <Transition appear show={addDuAnOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeDuAnModal}
        >
          <EditDuAnModal project={project} />
        </Dialog>
      </Transition>
      <Transition appear show={quanlythanhvienOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeQuanlythanhvienModal}
        >
          <QuanLyThanhVienModal />
        </Dialog>
      </Transition>
      <Transition appear show={phanquyenOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closePhanquyenModal}
        >
          <PhanQuyenSuDungModal />
        </Dialog>
      </Transition>
      <Transition appear show={deleteDuAnOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeDeleteDuAnModal}
        >
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
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
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
              <div className="inline-block w-full h-full max-w-xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <div className="px-[30px] py-[25px] flex flex-col">
                  <span className="text-black font-semibold text-center">
                    Are you sure to delete project?
                  </span>
                  <div className="flex flex-row space-x-4 mt-3 justify-center">
                    <button
                      className="btn  bg-green-500 border-0"
                      onClick={() => setDeleteDuAnOpen(false)}
                    >
                      No
                    </button>
                    <button
                      className="btn border-0 bg-red-500"
                      onClick={onDelete}
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default ProjectDetailModal;
