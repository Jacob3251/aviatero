import axios from "axios";
import { useEffect, useState } from "react";

const useClient = (currentpage) => {
  const [data, setData] = useState([]);
  console.log(currentpage);
  const [metaData, setMetaData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/client?page=${currentpage}&limit=8`
      );
      setData(data.data);
      setMetaData(data.metadata);
    };
    fetchData();
  }, [currentpage]);
  return [data, setData, metaData];
};

export default useClient;
