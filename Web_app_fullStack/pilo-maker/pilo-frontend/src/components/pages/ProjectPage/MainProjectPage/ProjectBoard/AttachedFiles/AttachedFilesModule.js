import React, { Fragment, useState } from "react";
import { PaperClipIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import AttachedFilesModal from "./AttachedFilesModal";
function AttachedFilesModule() {
  let [attachedOpen, setAttachedOpen] = useState(false);
  function closeAttachedModal() {
    setAttachedOpen(false);
  }

  function openAttachedModal() {
    setAttachedOpen(true);
  }
  return (
    <div>
      <div className="flex flex-row mr-6" onClick={openAttachedModal}>
        <PaperClipIcon className="w-5 h-5 text-gray-500 mr-1" />
        <span className="text-gray-600 cursor-pointer  font-medium text-sm">
          Documents
        </span>
      </div>
      <Transition appear show={attachedOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeAttachedModal}
        >
          <AttachedFilesModal />
        </Dialog>
      </Transition>
    </div>
  );
}

export default AttachedFilesModule;
