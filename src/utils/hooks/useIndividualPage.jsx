import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import axios from "axios";

const useIndividualPage = (id) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { loggedUserData } = useContext(AppContext);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://consultancy-crm-serverside-1.onrender.com/api/custompage/${id}`,
        {
          headers: {
            Authorization: `Bearer ${loggedUserData.token}`,
          },
        }
      );
      // const pageDatas = JSON.parse(data.data.pageData);
      // const parsed = { ...data.data, pageData: pageDatas };
      setData(data.data);
      setLoading(false);
      //   console.log(data.data);
    };
    fetchData();
  }, []);
  return [data, loading, setData, setLoading];
};

export default useIndividualPage;
