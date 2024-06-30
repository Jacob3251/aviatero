import { Navigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import useIndividualUserProfile from "../hooks/useIndividualUserProfile";
import toast from "react-hot-toast";
import { removeFromLocale } from "../helper";
function AuthChecker({ children }) {
  const location = useLocation();
  const [loggedInfo] = useIndividualUserProfile();
  const { isLogged, errorID } = useContext(AppContext);
  //   if (loading) {
  //     return <Loader></Loader>;
  //   }
  // Check authentication status
  if (!isLogged) {
    // Redirect to login page if not authenticated
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  }

  // console.log(loggedInfo);

  if (errorID === 1) {
    toast.error("Session Expired");
    removeFromLocale();
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  // Render children if authenticated

  return children;
}

export default AuthChecker;
