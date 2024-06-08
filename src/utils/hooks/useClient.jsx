import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const useClient = (currentpage) => {
  const { loggedUserData } = useContext(AppContext);
  const [data, setData] = useState([]);
  console.log(currentpage);
  const [metaData, setMetaData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://consultancy-crm-serverside.onrender.com/api/client?page=${currentpage}&limit=8`,
        {
          headers: {
            Authorization: `Bearer ${loggedUserData.token}`,
          },
        }
      );
      setData(data.data);
      setMetaData(data.metadata);
    };
    fetchData();
  }, [currentpage]);
  return [data, setData, metaData];
};

export default useClient;
