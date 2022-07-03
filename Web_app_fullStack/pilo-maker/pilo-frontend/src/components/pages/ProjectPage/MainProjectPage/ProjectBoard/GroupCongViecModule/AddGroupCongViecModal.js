import React, { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import listApi from "api/listApi";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ThreeDotsWave from "components/loading/ThreeDotsWave";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getLists } from "redux/actions/lists";
const schema = yup.object().shape({
  name: yup.string().required("Please type list name"),
});
function AddGroupCongViecModal() {
  const projectId = useParams();
  const projectIdFormat = projectId.id;
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const onListSubmit = async (values) => {
    try {
      const listData = await listApi.create(values, projectIdFormat);
      dispatch(getLists(projectIdFormat));
      toast.success("Created list successfully!", {
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
        <div className="inline-block border-2 border-gray-300 w-full h-full max-w-xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
          <div className="px-[30px] py-[25px]">
            <h1 className="text-xl text-black font-bold">
              Add new list
            </h1>
            <hr className="mt-3 mb-3" />
            <form onSubmit={handleSubmit(onListSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-md font-bold">
                   List name
                  </span>
                </label>
                <input
                  placeholder="list name"
                  className="input  bg-white text-black border-gray-300 border-2"
                  type="text"
                  {...register("name")}
                />
              </div>
              <div className="flex justify-center mx-auto">
                {isSubmitting && <ThreeDotsWave />}
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                class="btn btn-primary mt-5 w-full mb-1"
              >
                Add new list
              </button>
            </form>
          </div>
        </div>
      </Transition.Child>
    </div>
  );
}

export default AddGroupCongViecModal;
