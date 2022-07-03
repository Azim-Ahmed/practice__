import React, { useState, useEffect } from "react";
import userApi from "api/userApi";
export default function useUserList() {
  const [userList, setUserList] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await userApi.getAll();
        setUserList(result.users.data.data);
      } catch (error) {
        console.log("failed to fetch", error);
      }

      setLoading(false);
    })();
  }, []);
  return { userList, loading };
}
