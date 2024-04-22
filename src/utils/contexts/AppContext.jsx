import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

function AppManager({ children }) {
  const [hoverOverlay, setHoverOverlay] = useState(false);
  const [showNavDrawer, setShowNavDrawer] = useState(false);
  const appInfo = {
    hoverOverlay,
    setHoverOverlay,
    showNavDrawer,
    setShowNavDrawer,
  };
  return <AppContext.Provider value={appInfo}>{children}</AppContext.Provider>;
}

export default AppManager;
