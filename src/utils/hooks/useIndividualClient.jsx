import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import axios from "axios";

const useIndividualClient = (id) => {
  const { loggedUserData } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://consultancy-crm-serverside.onrender.com/api/client/${id}`,
        {
          headers: {
            Authorization: `Bearer ${loggedUserData.token}`,
          },
        }
      );
      setData(data.data);
      console.log(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return [data, loading, setData];
};

export default useIndividualClient;
