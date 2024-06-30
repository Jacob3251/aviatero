import { createContext, useEffect, useState } from "react";
import { addToLocale, findInLocale, removeFromLocale } from "../helper";
import axios from "axios";

export const AppContext = createContext();

function AppManager({ children }) {
  const [hoverOverlay, setHoverOverlay] = useState(false);
  const [showNavDrawer, setShowNavDrawer] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalData, setModalData] = useState({});
  const [openDashboardMenu, setOpenDashboardMenu] = useState(false);

  // console.log("form context", token);
  const [siteLoading, setSiteLoading] = useState(true);
  const [siteConfig, setSiteConfig] = useState({
    home_banner: "",
    home_sub_banner: "",
    cta_title: "",
    cta_sub_title: "",
    services_banner: "",
    services_sub_banner: "",
    services_banner_content: "",
    uk_office_address: "",
    uk_office_cell: "",
    bd_corporate_address: "",
    bd_corporate_cell: "",
    bd_legal_address: "",
    bd_legal_cell: "",
    fb_link: "",
    youtube_link: "",
    instagram_link: "",
    serviceExpertiseData: [],
  });
  const [loggedUserData, setLoggedUserData] = useState({});
  // token ? true :
  const [isLogged, setIsLogged] = useState(false);
  // site information useEffect
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://consultancy-crm-serverside-1.onrender.com/api/siteInformation"
      );
      if (data) {
        // console.log("blogplage", data);
        const siteconfiguration = data.siteConfigs;
        const socialconfiguration = data.socials;
        const blogPageData = data.blogPageData;
        const info = {
          ...siteconfiguration[0],
          ...socialconfiguration[0],
          serviceExpertiseData: data.serviceExpertiseData,
          blogPageData,
        };

        // console.log("social", data.serviceExpertiseData);
        setSiteConfig(info);
        setSiteLoading(!siteLoading);
      }
    };
    fetchData();
  }, []);
  // useEffect for getting the localStorage Data
  useEffect(() => {
    const value = findInLocale();
    if (value) {
      const { userData } = value;
      setLoggedUserData({ ...userData, token: value.token });
      setIsLogged(true);
    }
  }, []);
  const [loggedUserInfoLoading, setLoggedUserInfoLoading] = useState(true);
  const [errorID, setErrorID] = useState(0);
  const [loggedUserInfo, setLoggedUserInfo] = useState({});
  // useEffect for logged user information
  useEffect(() => {
    let userID;
    const value = findInLocale();
    console.log("from loggerUserInfo useEffect", value);
    if (value) {
      const { userData, token } = value;
      userID = userData.id;
      const fetchData = async () => {
        await axios
          .get(
            `https://consultancy-crm-serverside-1.onrender.com/api/user/${userID}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((data) => {
            console.log(
              "appcontext logged user info useEffect",
              data.data.data
            );
            const { id, name, email, photolink } = data.data.data;
            const updatedLocalInfo = {
              token,
              data: {
                id,
                name,
                email,
                photolink,
              },
            };
            addToLocale(updatedLocalInfo);

            setLoggedUserInfo(data.data.data);
            // addToLocale(data.data);
            setLoggedUserInfoLoading(false);
          })
          .catch((error) => {
            console.log(error);
            removeFromLocale();
            window.location.reload();
            setErrorID(error.response.data.errorId);
          });
        // console.log(data);
      };
      fetchData();
    }
  }, []);

  const [pendingNotifications, setPendingNotifications] = useState(0);

  const appInfo = {
    hoverOverlay,
    setHoverOverlay,
    showNavDrawer,
    setShowNavDrawer,
    showModal,
    setShowModal,
    modalData,
    setModalData,
    modalType,
    setModalType,
    isLogged,
    setIsLogged,
    siteConfig,
    setSiteConfig,
    siteLoading,
    setSiteLoading,
    loggedUserData,
    setLoggedUserData,
    openDashboardMenu,
    setOpenDashboardMenu,
    pendingNotifications,
    setPendingNotifications,
    loggedUserInfo,
    setLoggedUserInfo,
    loggedUserInfoLoading,
    setLoggedUserInfoLoading,
    errorID,
    setErrorID,
  };
  return <AppContext.Provider value={appInfo}>{children}</AppContext.Provider>;
}

export default AppManager;
