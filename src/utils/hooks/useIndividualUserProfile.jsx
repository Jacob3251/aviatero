import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import axios from "axios";

function useIndividualUserProfile() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { loggedUserData } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://consultancy-crm-serverside.onrender.com/api/user/${loggedUserData.id}`
      );
      setData(data.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return [data, loading, setData, setLoading];
}

export default useIndividualUserProfile;
