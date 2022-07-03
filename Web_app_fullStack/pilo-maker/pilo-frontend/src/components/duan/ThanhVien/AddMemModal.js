import React, { Fragment, useState, useEffect } from "react";
import { Transition, Dialog } from "@headlessui/react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useParams } from "react-router-dom";
import useUserList from "hooks/useUserList";
import projectApi from "api/projectApi";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getProject } from "redux/actions/project";

const animatedComponents = makeAnimated();

function AddMemModal() {
  const dispatch = useDispatch();
  const { userList, loading } = useUserList();
  const [memberId, setMemberId] = useState("");
  const projectId = useParams();
  const projectIdHandler = projectId.id;
  const newMembers = userList.map(function (user) {
    return { value: user.email, label: user.email, id: user.id };
  });
  const handleOptionSelect = (values) => {
    setMemberId(values[0].id);
  };
  useEffect(() => {
    dispatch(getProject(projectIdHandler))
  }, [dispatch])
  const handleAddMember = async () => {
    try {
      const memberData = await projectApi.addMember(memberId, projectIdHandler);
      dispatch(getProject(projectIdHandler))
      toast.success("Thêm thành viên thành công!", {
        duration: 2000,
        position: "top-right",
        className: "bg-green-500 text-white",
        icon: "👏",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-full px-4  text-center">
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
        <div className="inline-block fixed border-2 border-gray-300 w-full h-96 max-w-md overflow-hidden text-left align-middle transition-all transform bg-[#2c3e50] shadow-xl rounded-md">
          <div className="px-[30px] py-[25px]">
            <h1 className="text-xl text-white font-bold">
              Add new member
            </h1>
            <hr className="mt-3 mb-3" />

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-md">
                  Search
                </span>
              </label>
              {/* <input
                placeholder="nhập tên hoặc email"
                className="input  bg-white text-black border-gray-300 border-2"
                type="text"
              /> */}
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={newMembers}
                onChange={handleOptionSelect}
              />
              <button className="btn mt-5" onClick={handleAddMember}>
                Add new
              </button>
            </div>
          </div>
        </div>
      </Transition.Child>
    </div>
  );
}

export default AddMemModal;
