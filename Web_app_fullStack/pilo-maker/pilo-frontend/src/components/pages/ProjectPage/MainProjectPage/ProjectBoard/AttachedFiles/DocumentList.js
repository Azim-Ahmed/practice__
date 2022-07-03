import React, { useEffect } from "react";
import AddFileButton from "./AddFileButton";
import DocumentItem from "./DocumentItem";
import { useSelector, useDispatch } from "react-redux";
import { getFiles } from "redux/actions/files";
import { useParams } from "react-router-dom";
function DocumentList() {
  const files = useSelector((state) => state.file.files);
  const dispatch = useDispatch();
  const projectId = useParams();
  const projectIdReal = projectId.id;
  useEffect(() => {
    dispatch(getFiles(projectIdReal));
  }, [dispatch]);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Document list</h1>
      <hr />
      <div className="flex flex-wrap mt-4">
        {files.map((file) => (
          <DocumentItem file={file} />
        ))}
        
        <AddFileButton />
      </div>
    </div>
  );
}

export default DocumentList;
