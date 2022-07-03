import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ProjectDetailModal from "./ProjectDetailModal";
import { InformationCircleIcon } from "@heroicons/react/outline";
function ViewProjectDetail() {
  let [viewProjectOpen, setViewProjectOpen] = useState(false);
  function closeViewProjectModal() {
    setViewProjectOpen(false);
  }

  function openViewProjectModal() {
    setViewProjectOpen(true);
  }
  return (
    <>
      <div onClick={openViewProjectModal} className=" px-5 py-3">
        <div className="flex flex-row ">
          <InformationCircleIcon className="w-5 h-5 mr-1 text-[#95a5a6]" />
          <span className="text-[#95a5a6] cursor-pointer  font-medium text-sm">
            {" "}
            Detail
          </span>
        </div>
      </div>
      <Transition appear show={viewProjectOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeViewProjectModal}
        >
          <ProjectDetailModal setViewProjectOpen={setViewProjectOpen} />
        </Dialog>
      </Transition>
    </>
  );
}

export default ViewProjectDetail;
