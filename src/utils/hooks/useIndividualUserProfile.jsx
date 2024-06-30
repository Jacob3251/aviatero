import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import axios from "axios";

function useIndividualUserProfile() {
  const [data, setData] = useState({});
  const [errorID, setErrorID] = useState(0);
  const [loading, setLoading] = useState(true);
  const { loggedUserData, isLogged } = useContext(AppContext);
  // console.log(loggedUserData);

  useEffect(() => {
    const fetchData = async () => {
      if (isLogged) {
        await axios
          .get(
            `https://consultancy-crm-serverside-1.onrender.com/api/user/${loggedUserData.id}`,
            {
              headers: {
                Authorization: `Bearer ${loggedUserData.token}`,
              },
            }
          )
          .then((data) => {
            // console.log("foundya");
            setData(data.data.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log();
            setErrorID(error.response.data.errorId);
          });
      }
    };
    fetchData();
  }, [loggedUserData, isLogged]);
  return [data, loading, setData, setLoading, errorID];
}

export default useIndividualUserProfile;
