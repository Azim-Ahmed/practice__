import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ThanhVien from "./ThanhVien";
import projectApi from "api/projectApi";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ThreeDotsWave from "components/loading/ThreeDotsWave";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "redux/actions/project";
const schema = yup.object().shape({
  name: yup.string().required("Vui lòng nhập tên của bạn"),
  description: yup.string().required("Vui lòng nhập chức vụ của bạn"),
  start_date: yup.date().required("Vui lòng nhập ngày bắt đầu"),
  end_date: yup.date().required("Vui lòng nhập ngày kết thúc"),
  thumbnail: yup.string().required("Vui lòng nhập link ảnh thumbnail"),
});

function AddDuAnModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const onProjectSubmit = async (values) => {
    try {
      const projectData = await projectApi.create(values);
      dispatch(getProjects());
      toast.success("Tạo dự án thành công!", {
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
    <div className="min-h-screen px-4 text-center">
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
        <div className="inline-block w-full h-full max-w-xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
          <div className="px-[30px] py-[25px]">
            <form onSubmit={handleSubmit(onProjectSubmit)}>
              <h1 className="text-xl text-black font-bold">Add new project</h1>
              <hr className="mt-3 mb-3" />
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-md font-bold">
                    Project name
                  </span>
                </label>
                <input
                  placeholder="project name"
                  className="input  bg-white text-black border-gray-300 border-2"
                  type="text"
                  {...register("name")}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
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
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text text-black text-md font-bold">
                    Description
                  </span>
                </label>
                <textarea
                  className="textarea h-24  bg-white text-black border-gray-300 border-2"
                  placeholder="description"
                  defaultValue={""}
                  {...register("description")}
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text text-black text-md font-bold">
                    Thumbnail
                  </span>
                </label>
                <input
                  placeholder="thumbnail url"
                  className="input  bg-white text-black border-gray-300 border-2"
                  type="text"
                  {...register("thumbnail")}
                />
              </div>
              {/* <ThanhVien members={members} /> */}
              <div className="flex justify-center mx-auto">
                {isSubmitting && <ThreeDotsWave />}
              </div>
              <button
                disabled={isSubmitting}
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

export default AddDuAnModal;
