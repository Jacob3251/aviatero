import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const useQuery = (currentpage) => {
  const [data, setData] = useState([]);
  const { loggedUserData } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const { isLogged, setPendingNotifications } = useContext(AppContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://consultancy-crm-serverside-1.onrender.com/api/querymsg`,
          {
            headers: {
              Authorization: `Bearer ${loggedUserData.token}`,
            },
          }
        );
        setData(data.data);
        // setTotalNotifications(data.data.length);
        setLoading(false);
        console.log("notification data:", data.data);
        // let counter = 0;
        // const pending = data.data.filter((item) => item.status === "Pending");
        // console.log(pending.length);
        setPendingNotifications(data.pending);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (isLogged) {
      setTimeout(() => {
        fetchData();
      }, 300);
    }
  }, [data, isLogged, setPendingNotifications]);
  return [data, setData, loading];
};

export default useQuery;
