import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import AddGroupCongViecModal from "./AddGroupCongViecModal";
import { useParams } from "react-router-dom";
import useProjectDetail from "hooks/useProjectDetail";
function AddGroupCongViec() {
  let [addGroupOpen, setAddGroupOpen] = useState(false);
  function closeAddGroupModal() {
    setAddGroupOpen(false);
  }

  function openAddGroupModal() {
    setAddGroupOpen(true);
  }
  const projectId = useParams();
  const projectIdFormat = projectId.id;
  var user = localStorage.getItem("user");
  var userObject = JSON.parse(user);
  var userId = userObject.id;
  const { project, loading } = useProjectDetail(projectIdFormat);
  var identify = "";
  let addListButton;
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
    addListButton = (
      <div
        onClick={openAddGroupModal}
        className="text-violet-500 px-5 cursor-pointer  font-medium text-sm py-3"
      >
        + Add new list
      </div>
    );
  } else if (identify === "member") {
    if (project.permissions.includes("addList")) {
      addListButton = (
        <div
          onClick={openAddGroupModal}
          className="text-violet-500 px-5 cursor-pointer  font-medium text-sm py-3"
        >
          + Add new list
        </div>
      );
    } else {
      addListButton = <></>;
    }
  }
  return (
    <>
      {addListButton}
      <Transition appear show={addGroupOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeAddGroupModal}
        >
          <AddGroupCongViecModal />
        </Dialog>
      </Transition>
    </>
  );
}

export default AddGroupCongViec;
