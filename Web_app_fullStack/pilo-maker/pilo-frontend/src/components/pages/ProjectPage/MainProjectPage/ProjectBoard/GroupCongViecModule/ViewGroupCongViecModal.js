import React, { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import useLists from "hooks/useLists";
import { useParams } from "react-router-dom";
function ViewGroupCongViecModal() {
  const projectId = useParams();
  const { list, loading } = useLists(projectId.id);
  console.log(list);
  return (
    <div className="min-h-screen px-4  text-center">
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
        <div className="inline-block border-2 border-gray-300 w-full h-full max-w-xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
          <div className="px-[30px] py-[25px]">
            <h1 className="text-xl text-black font-bold">
              Lists of list
            </h1>
            <hr className="mt-3 mb-3" />

            <div className="form-control">
              <ul>
                {list.map((l) => (
                  <li>{l.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Transition.Child>
    </div>
  );
}

export default ViewGroupCongViecModal;
