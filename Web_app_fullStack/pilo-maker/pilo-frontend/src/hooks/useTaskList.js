import React, { useState, useEffect } from "react";
import taskApi from "api/taskApi";
export default function useTaskList(listId) {
  const [loading, setLoading] = useState(true);
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { tasks } = await taskApi.getAll(listId);
        setTaskList(tasks.data);
      } catch (error) {
        console.log("Faild to fetch project list");
      }
      setLoading(false);
    })();
  }, [listId]);
  return { taskList, loading };
}
