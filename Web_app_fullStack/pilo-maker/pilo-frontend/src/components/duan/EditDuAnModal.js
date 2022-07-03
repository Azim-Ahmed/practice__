import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import projectApi from "api/projectApi";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Moment from "react-moment";
import ThreeDotsWave from "components/loading/ThreeDotsWave";
import useProjectDetail from "hooks/useProjectDetail";
import { useParams } from "react-router-dom";
import moment from "moment";
import { useEffect } from "react";
const schema = yup.object().shape({
  name: yup.string().required("Vui lòng nhập tên của bạn"),
  description: yup.string().required("Vui lòng nhập chức vụ của bạn"),
  start_date: yup.date().required("Vui lòng nhập ngày bắt đầu"),
  end_date: yup.date().required("Vui lòng nhập ngày kết thúc"),
  thumbnail: yup.string().required("Vui lòng nhập link ảnh thumbnail"),
});

function EditDuAnModal({ project }) {
  const projectId = useParams();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: project.name,
      start_date: moment(project.start_date).format("YYYY-MM-DD"),
      end_date: moment(project.end_date).format("YYYY-MM-DD"),
      thumbnail: project.thumbnail,
      description: project.description
    }
  });
  const [projectName, setProjectName] = useState("")
  const [description, setDescription] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const onProjectSubmit = async (values) => {
    try {
      const projectData = await projectApi.edit(values, project.id);
      toast.success("Sửa dự án thành công!", {
        duration: 2000,
        position: "top-right",
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
              <h1 className="text-xl text-black font-bold">Edit project</h1>
              <hr className="mt-3 mb-3" />
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-md font-bold">
                    Project name
                  </span>
                </label>
                <input
                  placeholder="nhập tên dự án"
                  className="input  bg-white text-black border-gray-300 border-2"
                  type="text"
                  name="name"
                  {...register("name", { onChange: (e) => setProjectName(e.target.value)})}
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
                    {...register("start_date", { onChange: (e) => setStartDate(e.target.value)})}
                    name="start_date"
                  />
                </div>  
                <div className="flex flex-col">
                  <span className="label-text text-black font-semibold block">
                    End date
                  </span>
                  <input
                    className=" bg-[#2ecc71] font-medium mt-2  text-white rounded-lg focus:border-0 border-0"
                    type="date"
                    name="end_date"
                    {...register("end_date", { onChange: (e) => setEndDate(e.target.value)})}
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
                  placeholder="nhập thông tin bổ sung"
                  name="description"
                  {...register("description", { onChange: (e) => setDescription(e.target.value)})}
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text text-black text-md font-bold">
                    Thumbnail
                  </span>
                </label>
                <img
                  src={`${project.thumbnail}`}
                  className="w-12 h-12"
                  alt=""
                />
                <input
                  placeholder="nhập link thumbnail"
                  className="input  bg-white text-black border-gray-300 border-2"
                  type="text"
                  name="thumbnail"
                  {...register("thumbnail", { onChange: (e) => setThumbnail(e.target.value)})}
                />
              </div>
              {/* <ThanhVien members={project.members} /> */}
              <div className="flex justify-center mx-auto">
                {isSubmitting && <ThreeDotsWave />}
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="btn btn-primary mt-5 w-full mb-1"
              >
                Edit
              </button>
            </form>
          </div>
        </div>
      </Transition.Child>
    </div>
  );
}

export default EditDuAnModal;
