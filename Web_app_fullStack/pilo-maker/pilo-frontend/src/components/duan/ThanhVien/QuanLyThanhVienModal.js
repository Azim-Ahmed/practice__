import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { getProject } from "redux/actions/project";
import { useParams } from "react-router-dom";
import useProjectDetail from "hooks/useProjectDetail";
import AddMemModal from "./AddMemModal";
import AddAdminModal from "./AddAdminModal";
function QuanLyThanhVienModal() {
  const projectId = useParams();
  const projectIdFormat = projectId.id;
  const { project, loading } = useProjectDetail(projectIdFormat);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isYou, setIsYou] = useState(false);

  const handleRemoveUser = () => {
    
  }

  let adminId = [];

  let [addMemOpen, setAddMemOpen] = useState(false);
  function closeAddMemModal() {
    setAddMemOpen(false);
  }

  function openAddMemModal() {
    setAddMemOpen(true);
  }

  let [addAdminOpen, setAddAdminOpen] = useState(false);
  function closeAddAdminModal() {
    setAddAdminOpen(false);
  }

  function openAddAdminModal() {
    setAddAdminOpen(true);
  }

  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.current);
  const userId = loggedInUser.id;
  let admin;
  let normal;
  useEffect(() => {
    if (adminId.includes(userId)) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  });
  if (loading) {
    admin = "";
    normal = "";
  } else {
    admin = (
      <>
        {project.members.map((member) => {
          if (member.role === "admin") {
            adminId.push(member.user);
            return (
              <div className="flex flex-row items-center mt-6">
                <img
                  src="https://www.indiewire.com/wp-content/uploads/2022/03/Zoe-Saldana.jpg?w=780"
                  alt=""
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div className="flex flex-col">
                  <span className="text-base font-semibold">
                    {member.username}
                  </span>
                  <span className="text-gray-500 font-normal text-base">
                    {member.email}
                  </span>
                </div>
              </div>
            );
          } else {
            return "";
          }
        })}
      </>
    );
    normal = (
      <>
        {project.members.map((member) => {
          if (member.role === "normal") {
            return (
              <div className="flex flex-row items-center justify-between mt-6">
                <div className="flex flex-row items-center">
                  <img
                    src="https://www.indiewire.com/wp-content/uploads/2022/03/Zoe-Saldana.jpg?w=780"
                    alt=""
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div className="flex flex-col">
                    <span className="text-base font-semibold">
                      {member.username}
                    </span>
                    <span className="text-gray-500 font-normal text-base">
                      {member.email}
                    </span>
                  </div>
                </div>
                {isAdmin ? (
                  <div className="remove" onClick={handleRemoveUser}>
                    <button className="btn btn-error text-white">Remove</button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          }
        })}
      </>
    );
  }
  return (
    <div className="min-h-screen px-4 text-center">
      {/* <Toaster /> */}
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
        <div className="inline-block w-full h-full max-w-xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
          <div className="px-[30px] py-8">
            <div className="quanlyduan mb-4">
              <span className="text-black font-semibold text-2xl block">
                Admins
              </span>

              {admin}
              {isAdmin ? (
                <div
                  className="flex flex-row items-center mt-4 cursor-pointer"
                  onClick={openAddAdminModal}
                >
                  <PlusCircleIcon className="w-9 h-9 text-green-500" />
                  <div className="flex flex-col">
                    <span className="text-sm font-normal ml-2 block text-green-500">
                      Add new admin
                    </span>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <hr />
            <div className="mt-4">
              <div className="flex flex-row justify-between">
                <span className="text-black font-semibold text-2xl">
                  Members
                </span>
                {isAdmin ? (
                  <div className="" onClick={openAddMemModal}>
                    <button className="text-purple-500 font-medium text-sm">
                      + Add new member
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {normal}
            </div>
          </div>
        </div>
      </Transition.Child>
      <Transition appear show={addMemOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeAddMemModal}
        >
          <AddMemModal />
        </Dialog>
      </Transition>
      <Transition appear show={addAdminOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeAddAdminModal}
        >
          <AddAdminModal />
        </Dialog>
      </Transition>
    </div>
  );
}

export default QuanLyThanhVienModal;
