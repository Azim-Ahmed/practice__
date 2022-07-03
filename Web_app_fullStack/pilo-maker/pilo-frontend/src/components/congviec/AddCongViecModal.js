import React, { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import useProjectList from "hooks/useProjectList";
import useLists from "hooks/useLists";
import useProjectDetail from "hooks/useProjectDetail";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ThreeDotsWave from "components/loading/ThreeDotsWave";
import taskApi from "api/taskApi";
import { useSelector, useDispatch } from "react-redux";
import { getTasks } from "redux/actions/tasks";
const schema = yup.object().shape({
  name: yup.string().required("Vui lòng nhập tên công việc"),
  description: yup.string().required("Vui lòng nhập mô tả công việc"),
  start_date: yup.date().required("Vui lòng nhập hạn hoàn thành"),
  end_date: yup.date().required("Vui lòng nhập hạn hoàn thành"),
});
function AddCongViecModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { projectList, loading } = useProjectList();
  const dispatch = useDispatch();
  const [selectProject, setSelectProject] = useState("");
  const { project } = useProjectDetail(selectProject);
  const [selectGroup, setSelectGroup] = useState("");
  const [selectProjectName, setSelectProjectName] = useState("");
  const handleProjectChange = (e) => {
    setSelectProject(e.target.value);
    setSelectProjectName(e.target.options[e.target.selectedIndex].text);
  };

  const { list } = useLists(selectProject);

  const handleGroupChange = (selectedGroup) => {
    setSelectGroup(selectedGroup);
  };
  const onTaskSubmit = async (values) => {
    try {
      const taskData = await taskApi.create(
        values,
        selectProject,
        selectGroup,
        selectProjectName
      );
      dispatch(getTasks(selectGroup));
      toast.success("Tạo công việc thành công!", {
        duration: 2000,
        position: "top-right",
        className: "bg-green-500 text-white",
        icon: "👏",
      });
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) {
    return "";
  }
  return (
    <div className="min-h-screen px-4  text-center">
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
        <div className="inline-block border-2 border-gray-300 w-full h-full max-w-xl  text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
          <div className="px-[30px] py-[25px]">
            <h1 className="text-xl text-black font-bold">Thêm mới công việc</h1>
            <hr className="mt-3 mb-3" />
            <form onSubmit={handleSubmit(onTaskSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-md font-bold">
                    Tên công việc
                  </span>
                </label>
                <input
                  placeholder="nhập tên công việc"
                  className="input  bg-white text-black border-gray-300 border-2"
                  type="text"
                  {...register("name")}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6 mb-10">
                <div>
                  <span className="label-text text-black text-md font-bold">
                    Chọn dự án
                  </span>
                  <select
                    id="project"
                    name="project"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    onChange={(e) => handleProjectChange(e)}
                  >
                    <option value="0">--Chọn dự án--</option>
                    {projectList.map((project, index) => (
                      <option value={`${project.id}`} key={index}>
                        {project.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <span className="label-text text-black text-md font-bold">
                    Select list
                  </span>
                  <select
                    id="location"
                    name="location"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    onChange={(e) => handleGroupChange(e.target.value)}
                  >
                    <option>--Select list--</option>
                    {list.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="label-text text-black font-semibold block">
                    Start date
                  </span>
                  <input
                    className=" bg-[#2ecc71] font-medium mt-2  text-white rounded-lg focus:border-0 border-0"
                    type="date"
                    {...register("start_date")}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="label-text text-black font-semibold block">
                    End date
                  </span>
                  <input
                    className=" bg-[#2ecc71] font-medium mt-2  text-white rounded-lg focus:border-0 border-0"
                    type="date"
                    {...register("end_date")}
                  />
                </div>
              </div>
              {/* <div>
              <Checklist />
            </div> */}
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text text-black text-md font-bold">
                    Description
                  </span>
                </label>
                <textarea
                  className="textarea h-24 textarea-bordered bg-white text-black border-gray-300 border-2"
                  placeholder="nhập mô tả công viêc"
                  {...register("description")}
                />
              </div>
              <div className="flex justify-center mx-auto">
                {isSubmitting && <ThreeDotsWave />}
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-5 w-full mb-1"
              >
                Add new
              </button>
            </form>
          </div>
        </div>
      </Transition.Child>
    </div>
  );
}

export default AddCongViecModal;
