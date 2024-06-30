import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import axios from "axios";

function useIndividualsProgress(id) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { loggedUserData } = useContext(AppContext);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://consultancy-crm-serverside-1.onrender.com/api/progress/${id}`,
          {
            headers: {
              Authorization: `Bearer ${loggedUserData.token}`,
            },
          }
        )
        .then((data) => {
          setData(data.data.data);
          setLoading(false);
        });

      //   console.log(data.data);
    };
    fetchData();
  }, [id, loggedUserData]);
  return [data, loading, setData, setLoading];
}

export default useIndividualsProgress;
