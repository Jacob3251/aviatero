import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import axios from "axios";

function useCustomPages() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { loggedUserData } = useContext(AppContext);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://consultancy-crm-serverside-1.onrender.com/api/custompage`,
        {
          headers: {
            Authorization: `Bearer ${loggedUserData.token}`,
          },
        }
      );
      setData(data.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return [data, loading, setData, setLoading];
}

export default useCustomPages;
