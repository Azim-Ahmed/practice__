import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import AddCongViecModal from "../../../congviec/AddCongViecModal";
import AddDuAnModal from "../../../duan/AddDuAnModal";
import { ChevronDownIcon } from "@heroicons/react/solid";
function AddModule() {
  let [addJobOpen, setAddJobOpen] = useState(false);
  let [addDuAnOpen, setAddDuAnOpen] = useState(false);
  function closeAddJobModal() {
    setAddJobOpen(false);
  }

  function openAddJobModal() {
    setAddJobOpen(true);
  }

  function closeDuAnModal() {
    setAddDuAnOpen(false);
  }

  function openDuAnModal() {
    setAddDuAnOpen(true);
  }
  return (
    <div>
      <div className="mr-2">
        <button className="bg-purple-600 px-6 py-2 text-white rounded-full" onClick={openDuAnModal}> New project</button>
      </div>
      {/* <Transition appear show={addJobOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeAddJobModal}
        >
          <AddCongViecModal />
        </Dialog>
      </Transition> */}
      <Transition appear show={addDuAnOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeDuAnModal}
        >
          <AddDuAnModal />
        </Dialog>
      </Transition>
    </div>
  );
}

export default AddModule;
