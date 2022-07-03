import { useState, useEffect } from "react";
import userApi from "api/userApi";
export default function useUserDetail(userId) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const result = await userApi.get(userId);
        setUser(result);
        setLoading(false);
      } catch (error) {
        console.log("failed to fetch", error);
      }
    })();
  }, []);
  return { user, loading };
}
