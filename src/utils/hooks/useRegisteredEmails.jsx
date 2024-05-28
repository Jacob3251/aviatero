import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const useRegisteredEmails = (currentpage) => {
  const { loggedUserData } = useContext(AppContext);
  const [userEmails, setUserEmails] = useState([]);
  const [allEmails, setAllEmails] = useState([]);
  const [emailLoading, setEmailLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const userEmailsResponse = await axios.get(
        `http://localhost:5000/api/registeredemails/${loggedUserData.id}`
      );
      const allEmailsResponse = await axios.get(
        `http://localhost:5000/api/registeredemails`
      );
      if (userEmailsResponse.data) {
        setUserEmails(userEmailsResponse.data.data);
        setAllEmails(allEmailsResponse.data.data);
        setEmailLoading(false);
      }
    };
    fetchData();
  }, []);
  return [userEmails, setUserEmails, emailLoading, allEmails, setAllEmails];
};

export default useRegisteredEmails;
