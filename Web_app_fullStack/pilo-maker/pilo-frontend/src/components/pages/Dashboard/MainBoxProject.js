import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "redux/actions/project";
function MainBoxProject() {
  const projects = useSelector((state) => state.project.projects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  if (projects === []) {
    return (
      <div>Danh sach trong</div>
    );
  } else {
    return (
      <div className="w-full ">
        <hr />
        <div className="mainbox_list w-full flex flex-col items-center justify-center">
          {projects?.map((project) => (
            <a href={`/project/${project.id}`}>
              <div
                key={project.id}
                className=" w-56 py-3 px-4  border-0 flex flex-row items-center bg-violet-600 hover:bg-violet-700 rounded-xl cursor-pointer justify-start mt-3"
              >
                <img
                  src={project.thumbnail}
                  className="w-8 h-8 rounded-2xl border-2 border-white"
                  alt=""
                />
                <span className="text-white truncate text-md block font-medium ml-3">
                  {project.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default MainBoxProject;
