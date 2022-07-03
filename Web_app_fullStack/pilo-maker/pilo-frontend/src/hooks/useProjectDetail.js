import { useState, useEffect } from "react";
import projectApi from "api/projectApi";
export default function useProjectDetail(projectId) {
  const [project, setProject] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await projectApi.get(projectId);
        setProject(result.data);
      } catch (error) {
        console.log("failed to fetch", error);
      }

      setLoading(false);
    })();
  }, [projectId]);
  return { project, loading };
}
