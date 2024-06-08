import axios from "axios";
import { useEffect, useState } from "react";

function useServiceExpertise() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://consultancy-crm-serverside.onrender.com/api/serviceexpertise`
      );
      setData(data.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return [data, loading, setData, setLoading];
}

export default useServiceExpertise;
