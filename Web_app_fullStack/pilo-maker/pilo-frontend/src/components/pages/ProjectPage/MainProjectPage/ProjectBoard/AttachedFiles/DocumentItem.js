import React from "react";
import { PhotographIcon } from "@heroicons/react/solid";
function DocumentItem({ file }) {
  const imageHost = "http://localhost:8080"
  let displayFile;
  if (file.fileType === "image/jpeg" || file.fileType === "image/png") {
    displayFile = (
      <>
        <a href={`${imageHost}/${file.filePath}`} className="flex flex-col items-center" target="_blank" download rel="noreferrer">
          <img
            src={`${imageHost}/${file.filePath}`}
            className="w-16 h-16 mb-2"
            alt=""
          />
          <span className="text-xs text-gray-400 font-normal">
            {file.fileName}
          </span>
        </a>
      </>
    );
  } else if (file.fileType === "application/pdf") {
    displayFile = (
      <>
        <a href={`${imageHost}/${file.filePath}`} target="_blank" className="flex flex-col items-center" download rel="noreferrer">
          <img src="/images/pdficon.png" className="w-10 h-10" alt="" />
          <span className="text-xs text-gray-400 font-normal">
            {file.fileName}
          </span>
        </a>
      </>
    );
  } else if (file.fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || file.fileType === "application/msword") {
    displayFile = (
      <>
        <a href={`${imageHost}/${file.filePath}`} target="_blank" className="flex flex-col items-center" download rel="noreferrer">
          <img src="/images/word.png" className="w-10 h-10" alt="" />
          <span className="text-xs text-gray-400 font-normal">
            {file.fileName}
          </span>
        </a>
      </>
    );
  } else if (file.fileType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || file.fileType === "application/vnd.ms-excel") {
    displayFile = (
      <>
        <a href={`${imageHost}/${file.filePath}`} target="_blank" className="flex flex-col items-center" download rel="noreferrer">
          <img src="/images/excelicon.png" className="w-10 h-10" alt="" />
          <span className="text-xs text-gray-400 font-normal">
            {file.fileName}
          </span>
        </a>
      </>
    );
  }
  return (
    <div className="flex flex-col mr-2 cursor-pointer mt-2 border-[1px] border-gray-300 p-6 rounded-lg justify-center items-center">
      {displayFile}
    </div>
  );
}

export default DocumentItem;
