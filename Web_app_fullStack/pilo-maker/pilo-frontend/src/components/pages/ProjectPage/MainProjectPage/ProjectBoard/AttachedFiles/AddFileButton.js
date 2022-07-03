import React, { Fragment, useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";
import AddFileModal from "./AddFileModal";
function AddFileButton() {
  let [addFileOpen, setAddFileOpen] = useState(false);
  function closeAddFileModal() {
    setAddFileOpen(false);
  }

  function openAddFileModal() {
    setAddFileOpen(true);
  }
  return (
    <div className="mt-2">
      <div onClick={openAddFileModal} className="flex flex-col border-[1px] border-dashed w-32 border-gray-300 p-8 rounded-lg justify-center items-center">
        <PlusIcon className="w-5 h-5 text-gray-400" />
      </div>
      <Transition appear show={addFileOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeAddFileModal}
        >
          <AddFileModal setAddFileOpen={setAddFileOpen} />
        </Dialog>
      </Transition>
    </div>
  );
}

export default AddFileButton;
