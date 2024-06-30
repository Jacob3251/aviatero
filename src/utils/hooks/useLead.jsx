import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const useLead = (currentpage) => {
  const [data, setData] = useState([]);
  const { loggedUserData } = useContext(AppContext);
  console.log(currentpage);
  const [metaData, setMetaData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://consultancy-crm-serverside-1.onrender.com/api/lead?page=${currentpage}&limit=8`,
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

export default useLead;
