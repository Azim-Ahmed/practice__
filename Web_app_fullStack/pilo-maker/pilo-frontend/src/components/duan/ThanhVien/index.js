import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/solid";
import AddMemModal from "./AddMemModal";

function ThanhVien({ members }) {
  let [deleteOpen, setDeleteOpen] = useState(false);
  function closeDeleteModal() {
    setDeleteOpen(false);
  }

  function openDeleteModal() {
    setDeleteOpen(true);
  }
  let [addMemOpen, setAddMemOpen] = useState(false);
  function closeAddMemModal() {
    setAddMemOpen(false);
  }

  function openAddMemModal() {
    setAddMemOpen(true);
  }
  return (
    <div className="thanhvien">
      <div className="form-control mt-4">
        <div className="flex items-center justify-between">
          <label className="label">
            <span className="label-text text-black text-md font-bold">
              Member ({members.length})
            </span>
          </label>
          <div>
            <button
              type="button"
              onClick={openAddMemModal}
              className="text-[#793EF9] text-sm font-semibold"
            >
              + Add new member
            </button>
          </div>
        </div>

        <div className="flex flex-col h-64 overflow-y-auto p-3 w-full border-2 border-gray-300 rounded-md">
          {members?.map((mem) => (
            <div
              key={mem.user}
              className="flex mt-3   hover:bg-gray-200 hover:rounded-lg px-3 py-2 first:mt-0 flex-row items-center justify-between"
            >
              <div className="flex flex-row items-center">
                {/* <img src={mem.avatar} className="w-8 h-8 rounded-2xl" alt="" /> */}
                <div className="flex flex-col">
                  <span className="text-black font-semibold ml-2 text-sm">
                    {mem.email}
                  </span>
                  <span className="text-black ml-2 text-sm">
                    Role: {mem.role}
                  </span>
                </div>
              </div>

              <div className="">
                <TrashIcon
                  onClick={openDeleteModal}
                  className="w-5 h-5 text-red-500 cursor-pointer"
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Transition appear show={deleteOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeDeleteModal}
        >
          <div className="min-h-screen px-4 text-center">
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Bạn có chắc chắn muốn xóa thành viên này khỏi phòng ban không?
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Một khi đã xóa bạn không thể hoàn tác!
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={closeDeleteModal}
                  >
                    Chắc chắn
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={addMemOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeAddMemModal}
        >
          <AddMemModal />
        </Dialog>
      </Transition>
    </div>
  );
}

export default ThanhVien;
