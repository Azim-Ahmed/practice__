import React, { useEffect } from "react";
import ProjectPageHeader from "./Header";
import MainProjectPage from "./MainProjectPage";
import MetaTitle from "utils/MetaTitle";
import useProjectDetail from "hooks/useProjectDetail";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function ProjectPage() {
  const projectId = useParams();
  const { project, loading } = useProjectDetail(projectId.id);
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <>
        <MetaTitle title={`Project - ${project.name}`} />
        <div className="">
          <ProjectPageHeader />
          <MainProjectPage />
        </div>
      </>
    );
  }
}

export default ProjectPage;
