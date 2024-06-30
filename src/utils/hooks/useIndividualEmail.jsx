import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const useIndividualEmail = (id) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { loggedUserData } = useContext(AppContext);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://consultancy-crm-serverside-1.onrender.com/api/email/${id}`,
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
  return [data, loading];
};

export default useIndividualEmail;
