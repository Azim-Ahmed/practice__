import { useState, useEffect } from "react";
import taskApi from "api/taskApi";
export default function useTaskDetail(taskId) {
  const [task, setTask] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(true);
    // taskApi
    //   .get(taskId)
    //   .then((result) => {
    //     setTask(result.data);
    //     setLoading(false);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    (async () => {
      try {
        setLoading(true);
        // loading = true;
        const result = await taskApi.get(taskId);
        setTask(result.data);
      } catch (error) {
        console.log("failed to fetch", error);
      }
      setLoading(false);
      // loading = false;
    })();
  }, [taskId]);

  return { task, loading };
}
