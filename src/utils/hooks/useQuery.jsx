import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useQuery = (currentpage) => {
  const [data, setData] = useState([]);
  //   console.log(currentpage);
  const [metaData, setMetaData] = useState({});
  const [reloadTrigger, setReloadTrigger] = useState(0);
  const reload = () => setReloadTrigger((prev) => prev + 1);
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/querymsg?page=${currentpage}&limit=8`
      );
      setData(data.data);
      setMetaData(data.metadata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [currentpage]);
  useEffect(() => {
    fetchData();
  }, [currentpage, fetchData]);
  return [data, setData, metaData, reload];
};

export default useQuery;
