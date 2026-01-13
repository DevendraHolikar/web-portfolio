import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const useReadData = () => {
  const [fetchData, setFetchData] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "messages/");

    const getAllData = onValue(starCountRef, (snapshot) => {
      const value = snapshot.val();
      
      // If data exists, turn it into a array
      const list = value
        ? Object.entries(value).map(([id, item]) => ({
            id,
            ...item,
          }))
        : [];

      setFetchData(list);
    });
    return () => getAllData();
  }, []);

  return fetchData;
};

export default useReadData;
