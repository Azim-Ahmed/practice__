import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { uploadFile, getFiles } from "redux/actions/files";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useParams } from "react-router-dom";
function AddFileModal({ setAddFileOpen }) {
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const onFileAttached = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const projectId = useParams();
  const projectIdFull = projectId.id;
  const onClickHandler = () => {
    const data = new FormData();
    data.append("file", selectedFile);
    dispatch(uploadFile(data, projectIdFull));
    setAddFileOpen(false)
  };
  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  }, [selectedFile]);

  return (
    <div className="min-h-screen px-4 text-center">
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
          <div className="px-[30px] py-[25px] flex flex-col">
            <input
              type="file"
              name="file"
              className="outline-none focus:outline-none"
              onChange={onFileAttached}
            />
            {preview && selectedFile.type === "application/pdf" ? (
              // eslint-disable-next-line jsx-a11y/alt-text
              <object
                data={`${preview}`}
                type="application/pdf"
                width="500px"
                height="1000px"
              />
            ) : (
              ""
            )}
            {preview && selectedFile.type === "image/jpeg" ? (
              <img src={preview} style={{ objectFit: "cover" }} alt="" />
            ) : (
              ""
            )}
            {preview && selectedFile.type === "image/png" ? (
              <img src={preview} style={{ objectFit: "cover" }} alt="" />
            ) : (
              ""
            )}
            <button
              className="bg-yellow-500 text-white p-4 mt-4 rounded-lg"
              onClick={() => onClickHandler()}
            >
              Tải lên
            </button>
            {/* <CircularProgressbar
              value={singleProgress}
              text={`${singleProgress}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathColor: `rgba(255, 136, 136, ${singleProgress / 100})`,
                textColor: "#f88",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            /> */}
          </div>
        </div>
      </Transition.Child>
    </div>
  );
}

export default AddFileModal;
