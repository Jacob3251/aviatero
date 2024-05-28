import axios from "axios";
import { useEffect, useState } from "react";

const useTestimonial = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/testimonial`);
      setData(data.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return [data, loading];
};

export default useTestimonial;
