import React, { useState, useEffect } from "react";
import listApi from "api/listApi";
export default function useLists(projectId) {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { lists } = await listApi.getAll(projectId);
        setList(lists.data);
      } catch (error) {
        console.log("Faild to fetch project list");
      }
      setLoading(false);
    })();
  }, [projectId]);
  return { list, loading };
}
