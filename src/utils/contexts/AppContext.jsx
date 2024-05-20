import { createContext, useEffect, useState } from "react";
import { findInLocale } from "../helper";
import axios from "axios";

export const AppContext = createContext();

function AppManager({ children }) {
  const [hoverOverlay, setHoverOverlay] = useState(false);
  const [showNavDrawer, setShowNavDrawer] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalData, setModalData] = useState({});
  const loginValue = findInLocale();
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

  const [isLogged, setIsLogged] = useState(loginValue ? true : false);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/siteInformation"
      );
      if (data) {
        const siteconfiguration = data.siteConfigs;
        const socialconfiguration = data.socials;
        const info = {
          ...siteconfiguration[0],
          ...socialconfiguration[0],
          serviceExpertiseData: data.serviceExpertiseData,
        };

        // console.log("social", data.serviceExpertiseData);
        setSiteConfig(info);
        setSiteLoading(!siteLoading);
      }
    };
    fetchData();
  }, []);

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
  };
  return <AppContext.Provider value={appInfo}>{children}</AppContext.Provider>;
}

export default AppManager;
